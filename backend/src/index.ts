import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import userRouter from "./router/user-router";
import { profileRouter } from "./router/profile-router";
import { bankCardRouter } from "./router/bankCard-router";

const app = express();
const PORT = 9000;

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

const prisma = new PrismaClient();

app.use("/user", userRouter);
// app.use('/donation', userRouter);
app.use("/bankCard", bankCardRouter);
app.use("/profile", profileRouter);
app.use("/otp", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
