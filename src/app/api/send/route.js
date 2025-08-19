import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function handler(req,res) {
  try {
    const data = req.body

    return res.json(data);
  } catch (error) {
    console.log(error) 
    return NextResponse.json({ error }, { status: 500 });
  }
}