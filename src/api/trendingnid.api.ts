import axios, { AxiosResponse } from "axios";
import { trendingAPIInstance } from "./trendingbid.instance";

export async function authAPI(
  PHPSESSID: string,
  email: string,
  password: string
): Promise<AxiosResponse> {
  const res = await trendingAPIInstance.post(
    "/login",
    { email, password },
    {
      headers: {
        Cookie: `PHPSESSID=${PHPSESSID};`,
      },
      withCredentials: true,
    }
  );

  if (res.status != 200) throw new Error("API ERROR: " + res.status);

  return res;
}

export async function balanceAPI(
  PHPSESSID: string,
  cookies: string
): Promise<AxiosResponse> {
  const res = await trendingAPIInstance.get("/api/user/getprofile", {
    headers: { Cookie: `PHPSESSID=${PHPSESSID}; ${cookies}` },
  });

  return res;
}
