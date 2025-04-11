// src/controller/otp/sendOtp.ts
import { Request, Response } from 'express';
import { pool } from '../../db';
import { Resend } from 'resend';
import { randomInt } from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTP(req: Request, res: Response) {
  try {
    const { email } = req.body;
    
    // Rate limit check
    const { rows } = await pool.query(
      `SELECT COUNT(*) FROM otps 
       WHERE email = $1 AND created_at > NOW() - INTERVAL '1 hour'`,
      [email]
    );
    
    if (Number(rows[0].count) >= 3) {
      return res.status(429).json({ error: 'OTP limit reached (3 per hour)' });
    }

    // Generate and store OTP
    const otp = randomInt(100000, 999999).toString();
    await pool.query(
      `INSERT INTO otps (email, code, expires_at)
       VALUES ($1, $2, NOW() + INTERVAL '5 minutes')`,
      [email, otp]
    );

    // Send email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Your OTP Code',
      html: `Your OTP is: <strong>${otp}</strong> (expires in 5 minutes)`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
}