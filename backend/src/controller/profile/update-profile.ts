import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
    };
    const userId = decoded.userId;
    const { backgroundImage, avatarImage, socialMediaUrl, aboutMe } = req.body;

    const profile = await prisma.profile.update({
      where: { id: Number(userId) },
      data: {
        backgroundImage,
        avatarImage,
        socialMediaUrl,
        aboutMe,
      },
    });

    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};
