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
const express_1 = require("express");
const sendOtp_1 = require("../controller/otp/sendOtp");
const verifyOtp_1 = require("../controller/otp/verifyOtp");
const otpRouter = (0, express_1.Router)();
otpRouter.post("/send", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sendOtp_1.sendOTP)(req, res);
}));
otpRouter.post("/verify", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, verifyOtp_1.verifyOTP)(req, res);
}));
exports.default = otpRouter;
