import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createDonation = async (req: Request, res: Response) => {
  try {
    const {
      amount,
      donorId,
      recipientId,
      socialUrlOrBuyMeACoffeeUrl,
      specialMessage,
    } = req.body;

    if (!amount || !donorId || !recipientId || !socialUrlOrBuyMeACoffeeUrl) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 2. Create donation using Prisma
    const donation = await prisma.donation.create({
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
  } catch (error) {
    console.error("Error creating donation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
