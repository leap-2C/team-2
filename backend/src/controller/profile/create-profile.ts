import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createProfile = async (req: Request, res: Response) => {
    try {
      const { aboutMe, avatarImage, socialMediaUrl, userId } = req.body;
  
      // Convert userId to number
      const userIdNumber = parseInt(userId, 10);
      
      // Validate userId conversion
      if (isNaN(userIdNumber)) {
        return res.status(400).json({ error: "Invalid user ID format" });
      }
  
      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { id: userIdNumber },
      });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Check if profile already exists
      const existingProfile = await prisma.profile.findUnique({
        where: { userId: userIdNumber }
      });
  
      if (existingProfile) {
        return res.status(400).json({ error: "Profile already exists for this user" });
      }
  
      // Create profile
      const profile = await prisma.profile.create({
        data: {
          aboutMe,
          avatarImage,
          socialMediaUrl,
          user: {
            connect: { id: userIdNumber }
          }
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              email: true
            }
          }
        }
      });
  
      res.status(201).json({
        message: "Profile created successfully",
        profile,
      });
    } catch (error) {
      console.error("Profile creation error:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Profile creation failed",
      });
    }
  }

export default createProfile;