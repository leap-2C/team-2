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
const express_1 = require("express");
const create_user_1 = require("../controller/user/create-user");
const create_login_1 = require("../controller/login/create-login");
const create_profile_1 = __importDefault(require("../controller/profile/create-profile"));
const create_donation_1 = require("../controller/donation/create-donation");
const create_bankCard_1 = require("../controller/bankCard/create-bankCard");
const get_user_1 = require("../controller/user/get-user");
const get_users_1 = __importDefault(require("../controller/user/get-users"));
const userRouter = (0, express_1.Router)();
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, create_user_1.createUser)(req, res);
}));
userRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, create_login_1.createLogin)(req, res);
}));
userRouter.post("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, create_profile_1.default)(req, res);
}));
userRouter.post("/donation", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, create_donation_1.createDonation)(req, res);
}));
userRouter.post("/bankCard", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, create_bankCard_1.createBankCard)(req, res);
}));
userRouter.get("/current", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, get_user_1.getUser)(req, res);
}));
userRouter.get("/explore", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, get_users_1.default)(req, res);
}));
exports.default = userRouter;
