import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const updateBankCard = async (req: Request, res: Response) => {
    try {
         const token = req.headers.authorization?.split(" ")[1];
            if (!token) {
              return res.status(401).json({ error: "Authorization token required" });
            }
        
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
              userId: number;
            };
            const userId = decoded.userId;

        const { cardNumber, expirationDate, firstName, lastName } = req.body;

        const bankCard = await prisma.bankCard.update({
            where: { id: Number(userId) },
            data: {
                cardNumber,
                expirationDate,
                firstName,
                lastName,
            },
        });

        res.status(200).json({ bankCard });
    } catch (error) {
        res.status(500).json({ message: "Error updating bank card", error });
    }
};
