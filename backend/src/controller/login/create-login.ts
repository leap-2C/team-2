import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export const createLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email
      },
      JWT_SECRET || "default_secret", 
    );

    // Return success response with token
    res.status(200).json({
      message: "Login successful",
      token, 
      user: {
        id: user.id,
        email: user.email,
        username: user.username 
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};