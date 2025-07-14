CREATE TABLE "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"desc" text NOT NULL,
	"image" text NOT NULL,
	"category" text NOT NULL,
	"imagePath" text NOT NULL,
	"rating" numeric(2, 1) NOT NULL,
	"customerRating" integer[],
	"price" integer NOT NULL,
	"customerReviews" jsonb[] NOT NULL
);
