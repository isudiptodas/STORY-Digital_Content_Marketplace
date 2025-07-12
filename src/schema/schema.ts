import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const Customer = pgTable("customer", {
  id: serial("id").primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  password: text().notNull(),
  location: text().notNull(),
  profession: text().notNull(),
});

export const Seller = pgTable("seller", {
  id: serial("id").primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  password: text().notNull(),
  location: text().notNull(),
});