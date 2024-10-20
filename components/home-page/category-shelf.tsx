"use client";

import {
  DiscoverMovie200ResponseResultsInner,
  DiscoverTv200ResponseResultsInner,
  TrendingAll200ResponseResultsInner,
} from "@/tmbd-types/api";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import "swiper/css";
import "@/app/globals.css";

import FilmPoster from "./film-poster";

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

  if (films.some((film) => !film.poster_path)) {
    return null;
  }

  return (
    <div className="relative mb-14">
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
          modules={[FreeMode]}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
          }}
          shortSwipes={false}
          freeMode={{
            enabled: true,
            momentumBounce: false,
            momentumRatio: 0.35,
            momentumVelocityRatio: 0.6,
          }}
          slidesPerView={"auto"}
          spaceBetween={8}
          breakpoints={{
            640: {
              slidesPerGroup: 1,
              slidesPerGroupAuto: true,
              spaceBetween: 16,
              shortSwipes: true,
              freeMode: false,
            },
          }}
        >
          {films &&
            films.map((film: TrendingAll200ResponseResultsInner) => (
              <SwiperSlide key={film.id} style={{ width: "auto" }}>
                <div className="w-[120px] sm:w-[185px]">
                  <FilmPoster type={type} film={film} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="group absolute -right-[52px] top-11 hidden h-[278px] w-[52px] lg:block">
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
