import Link from "next/link";
import Image from "next/image";
import {
  DiscoverMovie200ResponseResultsInner,
  DiscoverTv200ResponseResultsInner,
  TrendingAll200ResponseResultsInner,
} from "@/tmbd-types/api";
import { Play } from "lucide-react";

type Film =
  | TrendingAll200ResponseResultsInner
  | DiscoverMovie200ResponseResultsInner
  | DiscoverTv200ResponseResultsInner;

export default function FilmPoster({
  type,
  film,
}: {
  type: "movie" | "tv" | "all";
  film: Film;
}) {
  return (
    <>
      {film && (
        <div className="group h-full w-full cursor-pointer">
          <Link
            href={`${type === "movie" ? "movie" : type === "tv" ? "tv" : (film as TrendingAll200ResponseResultsInner).media_type}/${film.id}`}
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm transition-transform duration-300 ease-in-out sm:group-hover:scale-105">
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={`Poster`}
                className="h-auto w-full object-cover"
                fill
                sizes="(min-width: 640px) 185px, 120px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 sm:group-hover:bg-opacity-50">
                <Play
                  className="scale-50 transform text-white opacity-0 transition-all duration-300 sm:group-hover:scale-100 sm:group-hover:opacity-100"
                  size={48}
                />
              </div>
            </div>
          </Link>
          <p className="mt-2 truncate text-sm text-gray-200 transition-colors duration-300 group-hover:text-white sm:text-base sm:font-semibold">
            {(film as TrendingAll200ResponseResultsInner).title ||
              (film as TrendingAll200ResponseResultsInner).original_name ||
              (film as DiscoverMovie200ResponseResultsInner).title ||
              (film as DiscoverTv200ResponseResultsInner).name}
          </p>
        </div>
      )}
    </>
  );
}
