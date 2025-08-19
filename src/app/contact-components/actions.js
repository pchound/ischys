'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// Simple US formatter: 1234567890 -> (123) 456-7890
function formatPhoneUS(raw) {
  const digits = String(raw || '').replace(/\D/g, '').slice(0, 10);
  const a = digits.slice(0, 3);
  const b = digits.slice(3, 6);
  const c = digits.slice(6, 10);
  if (digits.length === 10) return `(${a}) ${b}-${c}`;
  if (digits.length >= 7) return `(${a}) ${b}-${c}`;
  if (digits.length >= 4) return `(${a}) ${b}`;
  if (digits.length > 0) return `(${a}`;
  return '';
}

// (Optional) very small HTML escape for message safety
function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function sendEmail({ fname, lname, phone, email, message }) {
  if (!fname || !lname || !phone || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  // Always compute the formatted version on the server
  const phoneDigits = String(phone).replace(/\D/g, '');
  const formattedPhone = formatPhoneUS(phoneDigits);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: 'josephwilliamgarner@gmail.com',
      subject: `General Inquiry from ${fname} ${lname}`,
      html: `
        <h1>New message from ${email}</h1>
        <div>
          <p>${escapeHtml(message)}</p>
        </div>
        <hr/>
        <div>
          <p>
            <strong>Name:</strong> ${escapeHtml(fname)} ${escapeHtml(lname)}<br/>
            <strong>Phone:</strong> ${formattedPhone || phoneDigits || 'N/A'}<br/>
            <strong>Email:</strong> ${escapeHtml(email)}
          </p>
        </div>
      `,
    });

    if (error) {
      console.log('Error sending email: ', error);
      return { success: false, error: 'Error sending email. Try again!' };
    }
    return { success: true, data, message: 'Email sent successfully!' };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Error sending email. Try again!' };
  }
}
