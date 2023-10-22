import { AxiosResponse } from "axios";
import { trendingAPIInstance } from "./trendingbid.instance";

export async function balanceAPI(
  PHPSESSID: string
): Promise<AxiosResponse["data"]> {
  const res = await trendingAPIInstance.get("/api/user/getprofile", {
    headers: { Cookie: `PHPSESSID=${PHPSESSID};` },
  });

  return res.data;
}
