import { boolean, integer, numeric, pgTable, text } from "drizzle-orm/pg-core";

export const movies = pgTable("movies", {
  id: integer("id").primaryKey(),
  originalTitle: text("original_title"),
  popularity: numeric("popularity", { precision: 8, scale: 3 }),
  adult: boolean("adult"),
  video: boolean("video"),
});
