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
exports.createDonation = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, donorId, recipientId, socialUrlOrBuyMeACoffeeUrl, specialMessage, } = req.body;
        if (!amount || !donorId || !recipientId || !socialUrlOrBuyMeACoffeeUrl) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        // 2. Create donation using Prisma
        const donation = yield prisma.donation.create({
            data: {
                amount,
                donorId,
                recipientId,
                socialUrlOrBuyMeACoffeeUrl,
                specialMessage: specialMessage || null,
            },
            include: {
                donor: {
                    select: {
                        username: true,
                        email: true,
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
        // 3. Return the created donation
        res.status(201).json(donation);
    }
    catch (error) {
        console.error("Error creating donation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createDonation = createDonation;
