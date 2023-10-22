import { z } from "zod";

export const AuthBody = z.object({
  PHPSESSIONID: z.string(),
});

export type AuthBody = z.infer<typeof AuthBody>;
