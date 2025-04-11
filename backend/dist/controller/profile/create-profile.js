"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { aboutMe, avatarImage, socialMediaUrl, userId } = req.body;
        // Convert userId to number
        const userIdNumber = parseInt(userId, 10);
        // Validate userId conversion
        if (isNaN(userIdNumber)) {
            return res.status(400).json({ error: "Invalid user ID format" });
        }
        // Check if user exists
        const user = yield prisma.user.findUnique({
            where: { id: userIdNumber },
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const existingProfile = yield prisma.profile.findUnique({
            where: { userId: userIdNumber }
        });
        if (existingProfile) {
            return res.status(400).json({ error: "Profile already exists for this user" });
        }
        // Create profile
        const profile = yield prisma.profile.create({
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
    }
    catch (error) {
        console.error("Profile creation error:", error);
        res.status(500).json({
            error: "Internal server error",
            message: "Profile creation failed",
        });
    }
});
exports.default = createProfile;
