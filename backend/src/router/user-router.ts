

import { Router } from "express";
import { createUser } from "../controller/user/create-user"; 
import { createLogin } from "../controller/login/create-login";
import createProfile from "../controller/profile/create-profile";

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

export default userRouter;