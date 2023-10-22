import { Request, Response } from "express";
import { AuthBody } from "./auth.zod";
import RedisDB from "../db/redis.db";

export async function auth(req: Request<{}, {}, AuthBody>, res: Response) {
  try {
    const validation = AuthBody.safeParse(req.body);
    if (!validation.success)
      return res.status(422).send({ message: validation.error.issues });

    let redisDB = RedisDB.getInstance();

    await redisDB.client.select(0);

    const { PHPSESSIONID } = validation.data;
    await redisDB.client.set("token", PHPSESSIONID);
    return res.status(200).send({ message: "Saved successfully" });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) res.status(500).send(error.message);
  }
}
