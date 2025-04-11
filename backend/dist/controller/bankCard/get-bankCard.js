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
exports.getBankCard = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getBankCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const bankCard = yield prisma.bankCard.findUnique({
            where: { id: Number(userId) },
            select: {
                id: true,
                cardNumber: true,
                expirationDate: true,
                firstName: true,
                lastName: true,
                createdAt: true,
            },
        });
        if (!bankCard) {
            return res.status(404).json({ message: "Bank card not found" });
        }
        res.status(200).json({ bankCard });
    }
    catch (_a) { }
});
exports.getBankCard = getBankCard;
