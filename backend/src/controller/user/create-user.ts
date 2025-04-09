import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      res.status(409).json({
        success: false,
        message: "Бүртгэлтэй хэрэглэгч байна",
        code: "USER_EXISTS",
      });
      return;
    }

    // new user
    const newUser = await prisma.user.create({
      data: { username, email, password },
    });

    res.status(201).json({
      success: true,
      message: "Шинэ хэрэглэгчээр амжилттай бүртгэгдлээ",
      code: "SUCCESSFULLY_CREATED",
      data: newUser,
    });
    return;
  } catch (error) {
    // nemeh yavtsad aldaa garval
    res.status(500).json({
      success: false,
      message: "Серверийн алдаа",
      code: "SERVER_ERROR",
    });
    return;
  }
};
