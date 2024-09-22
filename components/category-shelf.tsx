"use client";

import {
  DiscoverMovie200ResponseResultsInner,
  DiscoverTv200ResponseResultsInner,
  TrendingAll200ResponseResultsInner,
} from "@/tmbd-types/api";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "@/app/globals.css";
import Link from "next/link";

export default function CategoryShelf({
  type,
  category,
  films,
}: {
  type: "movie" | "tv" | "all";
  category: string;
  films: (
    | DiscoverMovie200ResponseResultsInner
    | DiscoverTv200ResponseResultsInner
  )[];
}) {
  const swiperRef = useRef<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const width = window.screen.width;
    setScreenWidth(width);
  }, []);

  return (
    <div className="relative mb-8">
      <h3 className="mb-3 text-2xl font-bold">{category}</h3>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <Swiper
          className="peer relative z-0 select-none"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
          }}
          slidesPerView={"auto"}
          spaceBetween={8}
          breakpoints={{
            640: {
              slidesPerGroup: 1,
              slidesPerGroupAuto: true,
              spaceBetween: 16,
            },
          }}
        >
          {type === "all" &&
            films &&
            films.map((film: TrendingAll200ResponseResultsInner) => (
              <SwiperSlide key={film.id} className="w-auto">
                <div className="group h-full w-[120px] cursor-pointer sm:w-[185px]">
                  <Link href={`${film.media_type}/${film.id}`}>
                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm transition-transform duration-300 ease-in-out group-hover:scale-105">
                      <Image
                        src={
                          screenWidth > 640
                            ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                            : `https://image.tmdb.org/t/p/w154${film.poster_path}`
                        }
                        alt={`${film.title ?? film.original_name} Poster`}
                        className="h-auto w-full object-cover"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50">
                        <Play
                          className="scale-50 transform text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                          size={48}
                        />
                      </div>
                    </div>
                  </Link>
                  <p className="mt-2 truncate text-sm text-gray-200 transition-colors duration-300 group-hover:text-white sm:text-base sm:font-semibold">
                    {film.title ?? film.original_name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          {type === "movie" && films
            ? films.map((film: DiscoverMovie200ResponseResultsInner) => (
                <SwiperSlide key={film.id} className="w-auto">
                  <div className="group h-full w-[120px] cursor-pointer sm:w-[185px]">
                    <Link href={`${type}/${film.id}`}>
                      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm transition-transform duration-300 ease-in-out group-hover:scale-105">
                        <Image
                          src={
                            screenWidth > 640
                              ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                              : `https://image.tmdb.org/t/p/w154${film.poster_path}`
                          }
                          alt={`${film.title} Poster`}
                          className="h-auto w-full object-cover"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50">
                          <Play
                            className="scale-50 transform text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                            size={48}
                          />
                        </div>
                      </div>
                    </Link>
                    <p className="mt-2 truncate text-sm text-gray-200 transition-colors duration-300 group-hover:text-white sm:text-base sm:font-semibold">
                      {film.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))
            : type === "tv" &&
              films.map((film: DiscoverTv200ResponseResultsInner) => (
                <SwiperSlide key={film.id} className="w-auto">
                  <div className="group h-full w-[120px] cursor-pointer sm:w-[185px]">
                    <Link href={`${type}/${film.id}`}>
                      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm transition-transform duration-300 ease-in-out group-hover:scale-105">
                        <Image
                          src={
                            screenWidth > 640
                              ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                              : `https://image.tmdb.org/t/p/w154${film.poster_path}`
                          }
                          alt={`${film.name} Poster`}
                          className="h-auto w-full object-cover"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50">
                          <Play
                            className="scale-50 transform text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                            size={48}
                          />
                        </div>
                      </div>
                    </Link>
                    <p className="mt-2 truncate text-sm text-gray-200 transition-colors duration-300 group-hover:text-white sm:text-base sm:font-semibold">
                      {film.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <div className="group absolute -right-[52px] top-11 hidden h-[278px] w-[52px] sm:block">
        <button
          className={`group absolute z-50 h-[278px] px-2 hover:block group-hover:block ${
            isHovered ? "block" : "hidden"
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-10 group-hover:scale-150" />
        </button>
      </div>
      <div className="group absolute -left-[52px] top-11 hidden h-[278px] w-[52px] sm:block">
        <button
          className={`group absolute z-50 h-[278px] px-2 hover:block group-hover:block ${
            isHovered ? "block" : "hidden"
          } ${isBeginning ? "hidden" : "peer-hover:block"}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-10 group-hover:scale-150" />
        </button>
      </div>
    </div>
  );
}
