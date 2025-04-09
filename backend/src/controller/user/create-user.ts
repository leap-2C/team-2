import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const saltRounds = 10;

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Бүртгэлтэй хэрэглэгч байна",
        code: "USER_EXISTS",
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...userWithoutPassword } = newUser;

    return res.status(201).json({
      success: true,
      message: "Шинэ хэрэглэгчээр амжилттай бүртгэгдлээ",
      code: "SUCCESSFULLY_CREATED",
      data: userWithoutPassword,
    });
  } catch (error) {
    console.error("User creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Серверийн алдаа",
      code: "SERVER_ERROR",
    });
  }
};
