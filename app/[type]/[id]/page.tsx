import { Button } from "@/components/ui/button";
import WatchProviders from "@/components/watch-providers";
import { Movie, TvShow } from "@/lib/types";
import { WatchProvidersAvailableRegions200Response } from "@/tmbd-types/api";
import { Play, StarIcon } from "lucide-react";
import Image from "next/image";
import fallbackImage from "/public/fallback.svg";
import { redirect } from "next/navigation";
import BackButton from "@/components/back-button";

export default async function FilmDetails({
  params,
}: {
  params: { id: string; type: string };
}) {
  const { type } = params;
  if (type !== "movie" && type !== "tv") {
    redirect("/404");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/${params.type}/${params.id}?language=en-US&append_to_response=watch/providers`,
    options,
  );

  const responseRegions = await fetch(
    "https://api.themoviedb.org/3/watch/providers/regions?language=en-US",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDkzNmNiNjI3ZDQxMzY2MWQ2NGM2YTBjMzNlM2U2ZCIsIm5iZiI6MTcyNjQ0MDkzOC4wODg4MzgsInN1YiI6IjY2ZGNhZjgxZTRmMjVlMTg1MmU0MTQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AYLDR2U6KZAZGRMIIAcVmiY4PdhnlAHACkI28fVli_Q",
      },
      next: {
        revalidate: 604800,
      },
    },
  );
  const regions: WatchProvidersAvailableRegions200Response =
    await responseRegions.json();

  let releaseYear;
  let title;

  const film: Movie | TvShow = await response.json();

  if (type === "movie" && "release_date" in film) {
    releaseYear = film.release_date
      ? new Date(film.release_date).getFullYear()
      : null;
    title = film.title;
  } else if (type === "tv" && "first_air_date" in film) {
    releaseYear = film.first_air_date
      ? new Date(film.first_air_date).getFullYear()
      : null;
    title = film.name;
  }

  const watchProviders = film["watch/providers"].results;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`}
          alt={`${title} Backdrop image`}
          fill
          className="object-cover opacity-90"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
      </div>

      {/* back button */}
      <BackButton />

      {/* div with main info */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">
        <div className="w-full max-w-sm rounded-lg shadow-2xl sm:mt-16">
          <Image
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                : fallbackImage
            }
            alt={`${title} poster`}
            width={384}
            height={576}
            className="h-auto w-full rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
            priority
          />
        </div>

        {/* main content area */}
        <div className="flex w-full max-w-2xl flex-col items-start">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* release year, runtime, rating and genres */}
          <div className="items-center md:flex md:space-x-12 md:pb-8 md:pt-4">
            <div className="mb-4 flex items-center space-x-4 text-2xl text-muted-foreground md:mb-0">
              {releaseYear && <p className="md:mb-0">{releaseYear}</p>}
              {"runtime" in film && film.runtime && (
                <>
                  <span className="leading-3">‧</span>
                  <span className="w-max font-semibold">
                    {film.runtime} min
                  </span>
                </>
              )}
              <span className="leading-3">‧</span>
              <div className="flex items-center text-foreground">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <span className="pl-2 text-2xl font-semibold">
                  {film && film.vote_average?.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="mb-6 flex items-center space-x-8 md:mb-0">
              <div className="flex flex-wrap gap-2">
                {film.genres?.map((genre, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold md:mb-0"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mb-10 text-lg leading-relaxed text-gray-300">
            {film.overview}
          </p>

          {/* play button and watch providers */}
          <div className="relative flex w-full flex-col items-center justify-between sm:flex-row sm:items-start">
            <Button
              size="lg"
              className="z-10 mb-12 text-lg font-bold sm:mb-0 sm:mt-20"
            >
              <Play className="mr-2 size-6" fill="black" /> Play
            </Button>

            <div className="absolute flex w-full justify-center pb-20 pt-24 sm:justify-end sm:pl-4 md:pt-0">
              <WatchProviders
                watchProviders={watchProviders}
                availableRegions={regions.results}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
