import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const createProfile = async (req: Request, res: Response) => {
    try {
        
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Authorization token required" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
        const userId = decoded.userId;

        
        const { aboutMe, avatarImage, socialMediaUrl } = req.body;
        if (!aboutMe || !avatarImage || !socialMediaUrl) {
            return res.status(400).json({ 
                error: "Validation Error",
                details: {
                    aboutMe: !aboutMe ? "Required" : undefined,
                    avatarImage: !avatarImage ? "Required" : undefined,
                    socialMediaUrl: !socialMediaUrl ? "Required" : undefined
                }
            });
        }

        
        const existingProfile = await prisma.profile.findUnique({
            where: { userId }
        });
        if (existingProfile) {
            return res.status(409).json({ error: "User profile already exists" });
        }

        
        const profile = await prisma.profile.create({
            data: {
                aboutMe,
                avatarImage,
                socialMediaUrl,
                userId
            },
            select: {
                id: true,
                aboutMe: true,
                avatarImage: true,
                socialMediaUrl: true,
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
            success: true,
            data: profile
        });

    } catch (error: any) {
        console.error("Profile creation error:", error);
        
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ error: "Invalid or expired token" });
        }

        res.status(500).json({ 
            error: "Server Error",
            message: "Failed to create profile"
        });
    }
}

export default createProfile;