import { Prisma } from "@prisma/client";
import { Router } from "express";
import { updateProfile } from "../controller/profile/update-profile";

export const profileRouter = Router();

profileRouter.put("/update", async (req, res) => {
  await updateProfile(req, res);
});
