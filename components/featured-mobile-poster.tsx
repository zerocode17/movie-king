"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DiscoverMovie200ResponseResultsInner,
  DiscoverTv200ResponseResultsInner,
  TrendingAll200ResponseResultsInner,
} from "@/tmbd-types/api";
import ColorThief from "colorthief";
import { useState, useEffect } from "react";

type Film =
  | TrendingAll200ResponseResultsInner
  | DiscoverMovie200ResponseResultsInner
  | DiscoverTv200ResponseResultsInner;

export default function FeaturedMobile({
  type,
  film,
}: {
  type: "movie" | "tv" | "all";
  film: Film;
}) {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colorThief = new ColorThief();

  return (
    <>
      {film && (
        <div className="h-full w-full cursor-pointer">
          <Link
            href={`${type === "movie" ? "movie" : type === "tv" ? "tv" : (film as TrendingAll200ResponseResultsInner).media_type}/${film.id}`}
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm transition-all duration-300 ease-in-out">
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={`Poster`}
                className="h-auto w-full object-cover"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 0vw"
                onLoad={(event) => {
                  const img = event.target as HTMLImageElement;
                  let color;
                  if (img && screenWidth && screenWidth < 640) {
                    color = colorThief?.getColor(img);
                  }
                  if (color) {
                    const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                    if (img.parentElement) {
                      img.parentElement.style.boxShadow = `0 25px 50px -12px ${rgb}`;
                    }
                  }
                }}
              />
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
