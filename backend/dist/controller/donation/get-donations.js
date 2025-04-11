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
exports.getDonations = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getDonations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const donations = yield prisma.donation.findMany({
            where: { userId: Number(userId) },
            select: {
                id: true,
                amount: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
            },
        });
        if (!donations) {
            return res.status(404).json({ message: "No donations found" });
        }
        res.status(200).json({ donations });
    }
    catch (error) {
        console.error("Error fetching donations:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getDonations = getDonations;
