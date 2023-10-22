import express from "express";
import { auth } from "./auth.controller";

const authRouter = express.Router();

authRouter.post("/", auth);

export default authRouter;
