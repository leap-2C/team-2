import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        username: true,
        profile: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      code: "USERS_FETCHED",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      code: "SERVER_ERROR",
    });
  }
};

export default getUsers;
