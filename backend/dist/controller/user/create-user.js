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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
const saltRounds = 10;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const existingUser = yield prisma.user.findFirst({ where: { email } });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Бүртгэлтэй хэрэглэгч байна",
                code: "USER_EXISTS",
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        const newUser = yield prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        const { password: _ } = newUser, userWithoutPassword = __rest(newUser, ["password"]);
        return res.status(201).json({
            success: true,
            message: "Шинэ хэрэглэгчээр амжилттай бүртгэгдлээ",
            code: "SUCCESSFULLY_CREATED",
            data: userWithoutPassword,
        });
    }
    catch (error) {
        console.error("User creation error:", error);
        return res.status(500).json({
            success: false,
            message: "Серверийн алдаа",
            code: "SERVER_ERROR",
        });
    }
});
exports.createUser = createUser;
