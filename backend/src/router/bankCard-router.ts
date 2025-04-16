import { Express } from "express";
import { Router } from "express";
import { createBankCard } from "../controller/bankCard/create-bankCard";
import { updateBankCard } from "../controller/bankCard/update-bankCard";

export const bankCardRouter = Router();

bankCardRouter.get("/:id", async (req, res) => {
  await createBankCard(req, res);
});
bankCardRouter.put("/update", async (req, res) => {
  await updateBankCard(req, res);
});