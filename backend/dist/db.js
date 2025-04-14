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
exports.pool = void 0;
exports.initDB = initDB;
const serverless_1 = require("@neondatabase/serverless");
exports.pool = new serverless_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
// Initialize database table (run this once)
function initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.pool.query(`
    CREATE TABLE IF NOT EXISTS otps (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      code VARCHAR(6) NOT NULL,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_otps_email ON otps(email);
    CREATE INDEX IF NOT EXISTS idx_otps_expires ON otps(expires_at);
  `);
        console.log('Database initialized');
    });
}
// Call this when your app starts
initDB().catch(console.error);
