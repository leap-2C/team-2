import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createBankCard = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
    };
    const userId = decoded.userId;

    const { cardNumber, firstName, lastName, expirationDate } = req.body;

    if (!cardNumber || !firstName || !lastName || !expirationDate || !userId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const expirationDateObj = new Date(expirationDate);
    if (isNaN(expirationDateObj.getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const bankCard = await prisma.bankCard.create({
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
  } catch (error) {
    console.error("Bank card creation error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: "Failed to create bank card",
    });
  }
};
