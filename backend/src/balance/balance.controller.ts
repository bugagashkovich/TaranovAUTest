import { Request, Response } from "express";
import RedisDB from "../db/redis.db";
import { balanceAPI } from "../api/trendingnid.api";

export async function getBalance(req: Request, res: Response) {
  try {
    const redisDB = RedisDB.getInstance();
    redisDB.client.select(0);
    let token = await redisDB.client.get("token");
    if (!token)
      return res.status(401).send({ message: "Authentication required" });

    let data = await balanceAPI(token);

    res.status(200).send({ status: true, ...data });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).send({ message: error.message });
  }
}
