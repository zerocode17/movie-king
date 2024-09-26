"use client";

import FilmPoster from "@/components/film-poster";
import { TrendingAll200Response } from "@/tmbd-types/api";
import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function TvShows() {
  const [films, setFilms] = useState<TrendingAll200Response["results"]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (page: number) => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?language=en-US&page=${page}`,
      options,
    );
    const data: TrendingAll200Response = await response.json();
    setFilms(
      (prevMovies) => prevMovies && [...prevMovies, ...(data.results ?? [])],
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop <=
          document.documentElement.offsetHeight - 100 ||
        loading
      )
        return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="mt-14 text-4xl font-bold">Trending TV Shows</h1>
      <div className="mt-8 grid grid-cols-2 gap-6 pb-20 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {films?.map((film, index) => (
          <FilmPoster key={index} type="all" film={film} />
        ))}
      </div>
      {loading && (
        <div className="w-full pb-20">
          <LoaderCircleIcon className="mx-auto size-10 animate-spin" />
        </div>
      )}
    </div>
  );
}
