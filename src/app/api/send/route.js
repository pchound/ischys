// app/api/send/route.js
export const runtime = 'nodejs'; // Ensure Node runtime for Resend SDK

import { NextResponse } from 'next/server';
//import { sendEmail } from '../../../lib/actions'; // adjust the import if your path differs
//import { sendEmail } from '@src/lib/actions';
export async function POST(request) {
  try {
    const body = await request.json();
    // body should have: { fname, lname, phone, email, message }
    const result = await sendEmail(body);

    const status = result?.success ? 200 : 400;
    return NextResponse.json(result, { status });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
