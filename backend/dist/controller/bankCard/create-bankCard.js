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
exports.createBankCard = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const createBankCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Authorization token required" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        const { cardNumber, firstName, lastName, expirationDate } = req.body;
        if (!cardNumber || !firstName || !lastName || !expirationDate || !userId) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const expirationDateObj = new Date(expirationDate);
        if (isNaN(expirationDateObj.getTime())) {
            return res.status(400).json({ error: "Invalid date format" });
        }
        const user = yield prisma.user.findUnique({
            where: { id: Number(userId) },
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const bankCard = yield prisma.bankCard.create({
            data: {
                cardNumber: String(cardNumber),
                firstName,
                lastName,
                expirationDate: expirationDateObj,
                user: {
                    connect: { id: Number(userId) },
                },
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    },
                },
            },
        });
        res.status(201).json({
            message: "Bank card created successfully",
            bankCard,
        });
    }
    catch (error) {
        console.error("Bank card creation error:", error);
        res.status(500).json({
            error: "Internal server error",
            message: "Failed to create bank card",
        });
    }
});
exports.createBankCard = createBankCard;
