import { Button } from "@/components/ui/button";
import WatchProviders from "@/components/watch-providers";
import { Movie } from "@/lib/types";
import { ArrowLeft, Play, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function FilmDetails({
  params,
}: {
  params: { id: string; type: string };
}) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDkzNmNiNjI3ZDQxMzY2MWQ2NGM2YTBjMzNlM2U2ZCIsIm5iZiI6MTcyNjQ0MDkzOC4wODg4MzgsInN1YiI6IjY2ZGNhZjgxZTRmMjVlMTg1MmU0MTQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AYLDR2U6KZAZGRMIIAcVmiY4PdhnlAHACkI28fVli_Q",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/${params.type}/${params.id}?language=en-US&append_to_response=watch/providers`,
    options,
  );

  const movie: Movie = await response.json();

  // get year from release date
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;

  const watchProviders = movie["watch/providers"].results;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black text-white">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          alt={`${movie.title} Backdrop image`}
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
      </div>

      {/* back button */}
      <Link
        href="/"
        className="absolute left-8 top-8 z-20 text-white transition-colors hover:text-gray-300"
        aria-label="Go back to movies list"
      >
        <ArrowLeft size={32} />
      </Link>

      {/* div with main info */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
        <div className="relative aspect-[2/3] w-full max-w-sm self-start overflow-hidden rounded-lg shadow-2xl sm:mt-16">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
            priority
          />
        </div>

        {/* movie info */}
        <div className="flex flex-1 flex-col items-start">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {movie.title}
          </h1>

          <div className="items-center md:flex md:space-x-12 md:pb-8 md:pt-4">
            {releaseYear && (
              <p className="mb-4 text-2xl text-gray-400 md:mb-0">
                {releaseYear}
              </p>
            )}
            <div className="mb-6 flex items-center md:mb-0">
              <StarIcon className="mr-2 h-6 w-6 text-yellow-400" />
              <span className="text-2xl font-semibold">
                {movie.vote_average?.toFixed(1)}
              </span>
            </div>

            <div className="mb-8 md:mb-0">
              {movie.genres?.map((genre, index) => (
                <span
                  key={index}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <p className="mb-10 text-lg leading-relaxed text-gray-300">
            {movie.overview}
          </p>

          <div className="flex w-full flex-col items-start justify-between sm:flex-row">
            <Button
              size="lg"
              className="mb-12 transform rounded-xl bg-white px-6 py-6 text-xl font-bold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 sm:mb-0 sm:mt-20"
            >
              <Play className="mr-2 size-6" fill="black" /> Play Now
            </Button>

            <div className="flex w-full justify-end pl-4">
              <WatchProviders watchProviders={watchProviders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
