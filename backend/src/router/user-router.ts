import { Router } from "express";
import { createUser } from "../controller/user/create-user";


const userRouter = Router();

userRouter.post("/signup", createUser);