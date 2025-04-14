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
exports.verifyOTP = verifyOTP;
const db_1 = require("../../db");
function verifyOTP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, code } = req.body;
            // Verify and delete in one query
            const { rowCount } = yield db_1.pool.query(`DELETE FROM otps 
       WHERE email = $1 AND code = $2 AND expires_at > NOW()
       RETURNING id`, [email, code]);
            if (rowCount === 0) {
                return res.status(401).json({ error: 'Invalid or expired OTP' });
            }
            res.json({ success: true });
        }
        catch (error) {
            console.error('Verify OTP error:', error);
            res.status(500).json({ error: 'Failed to verify OTP' });
        }
    });
}
