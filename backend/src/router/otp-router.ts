
import { Router } from "express";
import { sendOTP } from "../controller/otp/sendOtp";
import { verifyOTP } from "../controller/otp/verifyOtp";

const otpRouter = Router();

otpRouter.post("/send", async (req, res) => {
  await sendOTP(req, res);
});
otpRouter.post("/verify", async (req, res) => {
  await verifyOTP(req, res);
});

export default otpRouter;