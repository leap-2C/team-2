

import { Router } from "express";
import { createUser } from "../controller/user/create-user"; 
import { createLogin } from "../controller/login/create-login";
import createProfile from "../controller/profile/create-profile";
import { createDonation } from "../controller/donation/create-donation";
import { createBankCard } from "../controller/bankCard/create-bankCard";
import { getUser } from "../controller/user/get-user";
import  getUsers  from "../controller/user/get-users";

const userRouter = Router();


userRouter.post("/signup", async (req, res) => {
  await createUser(req, res);
});
userRouter.post("/login", async (req, res) => {
  await createLogin(req, res);
});
userRouter.post("/profile", async (req, res) => {
  await createProfile(req, res);
});
userRouter.post("/donation", async (req, res) => {
  await createDonation(req, res);
});
userRouter.post("/bankCard", async (req, res) => {
  await createBankCard(req, res);
});
userRouter.get("/current", async (req, res) => {
  await getUser(req, res);
});
userRouter.get("/explore", async (req, res) => {
  await getUsers(req, res);
});

export default userRouter;