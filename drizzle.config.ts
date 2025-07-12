import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema/schema.ts",
  //out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_NEON_DB_URL!,
  },
});