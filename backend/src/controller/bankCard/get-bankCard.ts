import { PrismaClient } from "@prisma/client";
import  { Request, Response } from "express";

const prisma = new PrismaClient();

export const getBankCard = async (req: Request, res: Response) => { 
    try{
        const userId = req.params.id;
        const bankCard = await prisma.bankCard.findUnique({
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
    }catch{}
}


