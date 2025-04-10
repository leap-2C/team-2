import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateBankCard = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
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
