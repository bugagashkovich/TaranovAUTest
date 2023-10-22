import redis, { RedisClientType, createClient } from "redis";

export default class RedisDB {
  private static instance: RedisDB;
  private static _client: RedisClientType;
  private constructor() {}
  static getInstance(): RedisDB {
    if (!RedisDB.instance) RedisDB.instance = new RedisDB();
    return RedisDB.instance;
  }

  public async connect(
    url: string,
    username: string,
    password: string
  ): Promise<void> {
    RedisDB._client = createClient({ username, password, url });
    RedisDB._client.connect();
  }

  public get client(): RedisClientType {
    return RedisDB._client;
  }
}
