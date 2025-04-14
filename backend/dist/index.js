"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const user_router_1 = __importDefault(require("./router/user-router"));
const app = (0, express_1.default)();
const PORT = 9000;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.json());
const prisma = new client_1.PrismaClient();
app.use("/user", user_router_1.default);
// app.use('/donation', userRouter);
app.use("/bankCard", user_router_1.default);
app.use("/profile", user_router_1.default);
app.use("/otp", user_router_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
