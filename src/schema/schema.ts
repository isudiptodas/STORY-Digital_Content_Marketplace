import { pgTable, text, serial, numeric, integer, jsonb } from "drizzle-orm/pg-core";

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

export const Product = pgTable("product", {
  id: serial("id").primaryKey(),
  name: text().notNull(),
  sellerEmail: text().notNull(),
  desc: text().notNull(),
  image: text().notNull(),
  category: text().notNull(),
  imagePath: text().notNull(),
  rating: numeric({ precision: 2, scale: 1 }),
  customerRating: integer().array(),
  price: integer().notNull(),
  customerReviews: jsonb().array()
});

export const Wishlist = pgTable("wishlist", {
  id: serial("id").primaryKey(),
  name: text().notNull(),
  userEmail: text().notNull(),
  image: text().notNull(),
  category: text().notNull(),
  rating: numeric({ precision: 2, scale: 1 }),
  customerRating: integer().array(),
  price: integer().notNull(),
});

