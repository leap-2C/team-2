import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
    };
    const userId = decoded.userId;

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        profile: true,
        donationsReceived: {
          include: {
            donor: { 
              select: {
                id: true,
                username: true, 
                profile: true,
              },
            },
          },
        },
        bankCard: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error in getUser:", error);

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: "Invalid token" });
    }

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: "Token expired" });
    }

    return res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
