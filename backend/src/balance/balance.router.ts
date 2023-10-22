import express from "express";
import { getBalance } from "./balance.controller";

let balanceRouter = express.Router();

balanceRouter.get("/", getBalance);

export default balanceRouter;
