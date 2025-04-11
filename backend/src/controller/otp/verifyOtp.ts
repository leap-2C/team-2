// src/controller/otp/verifyOtp.ts
import { Request, Response } from 'express';
import { pool } from '../../db';

export async function verifyOTP(req: Request, res: Response) {
  try {
    const { email, code } = req.body;
    
    // Verify and delete in one query
    const { rowCount } = await pool.query(
      `DELETE FROM otps 
       WHERE email = $1 AND code = $2 AND expires_at > NOW()
       RETURNING id`,
      [email, code]
    );

    if (rowCount === 0) {
      return res.status(401).json({ error: 'Invalid or expired OTP' });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
}