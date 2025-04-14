"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOTP = sendOTP;
const db_1 = require("../../db");
const resend_1 = require("resend");
const crypto_1 = require("crypto");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
function sendOTP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email } = req.body;
            // Rate limit check
            const { rows } = yield db_1.pool.query(`SELECT COUNT(*) FROM otps 
       WHERE email = $1 AND created_at > NOW() - INTERVAL '1 hour'`, [email]);
            if (Number(rows[0].count) >= 3) {
                return res.status(429).json({ error: 'OTP limit reached (3 per hour)' });
            }
            // Generate and store OTP
            const otp = (0, crypto_1.randomInt)(100000, 999999).toString();
            yield db_1.pool.query(`INSERT INTO otps (email, code, expires_at)
       VALUES ($1, $2, NOW() + INTERVAL '5 minutes')`, [email, otp]);
            // Send email
            yield resend.emails.send({
                from: 'onboarding@resend.dev',
                to: email,
                subject: 'Your OTP Code',
                html: `Your OTP is: <strong>${otp}</strong> (expires in 5 minutes)`,
            });
            res.json({ success: true });
        }
        catch (error) {
            console.error('Send OTP error:', error);
            res.status(500).json({ error: 'Failed to send OTP' });
        }
    });
}
