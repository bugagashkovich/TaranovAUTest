import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./auth/auth.router";
import balanceRouter from "./balance/balance.router";
import RedisDB from "./db/redis.db";

// SETUP APP
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// SETUP ROUTES
app.use("/api/auth", authRouter);
app.use("/api/balance", balanceRouter);

async function init() {
  if (!process.env.REDIS_URL) throw new Error("Please specify REDIS_URL");
  // SETUP REDIS
  const redis = RedisDB.getInstance();
  await redis.connect(
    process.env.REDIS_URL,
    process.env.REDIS_USERNAME,
    process.env.REDIS_PASSWORD
  );

  // START APP
  app.listen(process.env.PORT, () => {
    console.log("APP listening on port " + process.env.PORT);
  });
}

init();
