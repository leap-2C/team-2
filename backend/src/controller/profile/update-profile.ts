import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { backgroundImage,  avatarImage, socialMediaUrl, aboutMe } = req.body;

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
