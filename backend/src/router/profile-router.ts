import { Prisma } from "@prisma/client";
import { Router } from "express";
import { updateProfile } from "../controller/profile/update-profile";

const profileRouter = Router();

profileRouter.put("/:id", async (req, res) => {
  await updateProfile(req, res);
});
