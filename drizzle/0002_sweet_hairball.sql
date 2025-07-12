CREATE TABLE "seller" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"location" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "id" serial PRIMARY KEY NOT NULL;