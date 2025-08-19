// src/app/api/send/route.js
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/actions'; // ← use relative path

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await sendEmail(body);
    const status = result?.success ? 200 : 400;
    return NextResponse.json(result, { status });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
