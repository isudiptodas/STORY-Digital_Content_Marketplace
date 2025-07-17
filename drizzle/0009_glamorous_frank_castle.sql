ALTER TABLE "wishlist" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "wishlist" ADD COLUMN "userEmail" text NOT NULL;--> statement-breakpoint
ALTER TABLE "wishlist" ADD COLUMN "image" text NOT NULL;--> statement-breakpoint
ALTER TABLE "wishlist" ADD COLUMN "category" text NOT NULL;--> statement-breakpoint
ALTER TABLE "wishlist" ADD COLUMN "rating" numeric(2, 1);--> statement-breakpoint
ALTER TABLE "wishlist" ADD COLUMN "customerRating" integer[];--> statement-breakpoint
ALTER TABLE "wishlist" ADD COLUMN "price" integer NOT NULL;