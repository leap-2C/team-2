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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDonation = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const createDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Authorization token required" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        const { amount, recipientUsername, message } = req.body;
        if (!amount || !recipientUsername) {
            return res.status(400).json({
                error: "Missing required fields",
                required: ["amount", "recipientUsername"]
            });
        }
        const recipient = yield prisma.user.findUnique({
            where: { username: recipientUsername }
        });
        if (!recipient) {
            return res.status(404).json({ error: "Recipient not found" });
        }
        if (userId === recipient.id) {
            return res.status(400).json({ error: "Cannot donate to yourself" });
        }
        const donation = yield prisma.donation.create({
            data: {
                amount: Number(amount),
                donorId: userId,
                recipientId: recipient.id,
                socialUrlOrBuyMeACoffeeUrl: "",
                specialMessage: "",
            },
            include: {
                donor: {
                    select: {
                        username: true,
                    },
                },
                recipient: {
                    select: {
                        username: true,
                        email: true,
                    },
                },
            },
        });
        res.status(201).json({
            success: true,
            message: "Donation created successfully",
            donation,
        });
    }
    catch (error) {
        console.error("Donation creation error:", error);
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return res.status(401).json({ error: "Invalid token" });
        }
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return res.status(401).json({ error: "Token expired" });
        }
        res.status(500).json({
            error: "Internal server error",
            message: "Failed to process donation"
        });
    }
});
exports.createDonation = createDonation;
