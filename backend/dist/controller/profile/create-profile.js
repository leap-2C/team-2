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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Authorization token required" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
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
        const existingProfile = yield prisma.profile.findUnique({
            where: { userId }
        });
        if (existingProfile) {
            return res.status(409).json({ error: "User profile already exists" });
        }
        const profile = yield prisma.profile.create({
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
    }
    catch (error) {
        console.error("Profile creation error:", error);
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return res.status(401).json({ error: "Invalid or expired token" });
        }
        res.status(500).json({
            error: "Server Error",
            message: "Failed to create profile"
        });
    }
});
exports.default = createProfile;
