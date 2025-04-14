import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

interface DonationRequest {
  amount: number;
  recipientUsername: string;
  message?: string;
}

export const createDonation = async (req: Request, res: Response) => {
  try {
    
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    const userId = decoded.userId;

    
    const { amount, recipientUsername, message }: DonationRequest = req.body;
    
    if (!amount || !recipientUsername) {
      return res.status(400).json({ 
        error: "Missing required fields",
        required: ["amount", "recipientUsername"]
      });
    }

    
    const recipient = await prisma.user.findUnique({
      where: { username: recipientUsername }
    });

    if (!recipient) {
      return res.status(404).json({ error: "Recipient not found" });
    }

    
    if (userId === recipient.id) {
      return res.status(400).json({ error: "Cannot donate to yourself" });
    }

    
    const donation = await prisma.donation.create({
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

  } catch (error) {
    console.error("Donation creation error:", error);
    
    
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: "Invalid token" });
    }

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "Token expired" });
    }

    res.status(500).json({ 
      error: "Internal server error",
      message: "Failed to process donation" 
    });
  }
};