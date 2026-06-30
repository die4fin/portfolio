import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:8000"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  // biome-ignore lint/suspicious/noConsole: Diwajibkan untuk memberikan crash log informatif saat fase build platform
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  throw new Error("Invalid environment variables initialization failed.");
}

export const env = parsedEnv.data;
