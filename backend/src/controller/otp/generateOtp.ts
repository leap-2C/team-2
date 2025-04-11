import { pool } from '../../db';
import { randomInt } from 'crypto';

export async function generateOTP(email: string): Promise<{otp: string|null, error?: string}> {
  // Check rate limit first
  const lastHourCount = await pool.query(
    `SELECT COUNT(*) FROM otps 
     WHERE email = $1 AND created_at > NOW() - INTERVAL '1 hour'`,
    [email]
  );
  
  if (Number(lastHourCount.rows[0].count) >= 3) {
    return { otp: null, error: 'OTP limit reached (3 per hour)' };
  }

  const otp = randomInt(100000, 999999).toString();
  
  await pool.query(
    `INSERT INTO otps (email, code, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '5 minutes')`,
    [email, otp]
  );

  return { otp };
}