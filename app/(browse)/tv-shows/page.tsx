"use client";

import FilmPoster from "@/components/home-page/film-poster";
import { TrendingTv200Response } from "@/tmbd-types/api";
import { LoaderCircleIcon, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function TvShows() {
  const [tvShows, setTvShows] = useState<TrendingTv200Response["results"]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);

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
      `https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=${page}`,
      options,
    );
    const data: TrendingTv200Response = await response.json();
    setTvShows(
      (prevMovies) => prevMovies && [...prevMovies, ...(data.results ?? [])],
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Show up button when scrolled down one page
      setShowUpButton(scrollTop > windowHeight);

      // Infinite scroll logic
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="mt-14 text-4xl font-bold">Trending TV Shows</h1>
      <div className="mt-8 grid grid-cols-2 gap-6 pb-20 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {tvShows?.map((tvShow, index) => (
          <FilmPoster key={index} type="tv" film={tvShow} />
        ))}
      </div>
      {loading && (
        <div className="w-full pb-20">
          <LoaderCircleIcon className="mx-auto size-10 animate-spin" />
        </div>
      )}
      {showUpButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full p-2 text-foreground transition-opacity hover:bg-background/90"
          aria-label="Scroll to top"
        >
          <ChevronUp className="size-8" />
        </button>
      )}
    </div>
  );
}
