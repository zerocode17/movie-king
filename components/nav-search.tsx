"use client";

import { X, Search, LoaderCircle } from "lucide-react";
import { useState, useRef } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import useSWR from "swr";
import { SearchMulti200Response } from "@/tmbd-types/api";
import Image from "next/image";
import Link from "next/link";
import fallbackImage from "/public/fallback.svg";
import { useRouter } from "next/navigation";
import { FilterSearch } from "@/lib/filter-search";

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
    },
  }).then((res) => res.json());

export default function NavSearch() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchIconVisible, setIsSearchIconVisible] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery] = useDebounce(searchInput, 400);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const router = useRouter();

  const toggleSearch = () => {
    if (searchInput && searchInputRef.current && isSearchOpen) {
      setSearchInput("");
      searchInputRef.current.value = "";
    }
    if (!isSearchOpen) {
      setIsSearchVisible(true);
      setIsSearchIconVisible(false);
      setTimeout(() => {
        setIsSearchOpen(true);
        searchInputRef.current?.focus();
      }, 10);
    } else if (!searchInput) {
      setIsSearchOpen(false);
      searchInputRef.current?.blur();
      setTimeout(() => {
        setIsSearchVisible(false);
        setIsSearchIconVisible(true);
      }, 300); // match this with transition duration
    }
  };

  const { data, error, isLoading } = useSWR<SearchMulti200Response>(
    searchQuery
      ? `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=true&language=en-US&page=1`
      : null,
    fetcher,
    {
      onSuccess: (data) => {
        if (data) {
          setPopoverOpen(true);
        }
      },
      onError: () => {
        setPopoverOpen(false);
      },
    },
  );

  return (
    <div className="relative hidden items-center sm:flex">
      <div
        ref={searchContainerRef}
        className={`absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden transition-all duration-300 ease-in-out ${
          isSearchVisible ? "visible" : "invisible"
        }`}
        style={{
          width: isSearchOpen ? "clamp(160px, 30vw, 300px)" : "0",
          opacity: isSearchOpen ? 1 : 0,
        }}
      >
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="h-8 w-full rounded-full py-1.5 text-sm"
              aria-label="Search movies and TV shows"
              onInput={(e) => {
                setSearchInput(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/search?query=${searchInput}`);
                }
              }}
            />
          </PopoverTrigger>
          <button
            onClick={toggleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Close search"
          >
            <X className="size-5" />
          </button>
          <PopoverContent
            className="w-[300px] text-wrap"
            onOpenAutoFocus={(event) => event.preventDefault()}
            onFocusOutside={(event) => event.preventDefault()}
          >
            {isLoading && (
              <div className="w-full">
                <LoaderCircle className="mx-auto size-8 h-[400px] animate-spin text-muted-foreground" />
              </div>
            )}
            {data && data.results && data.results.length > 0 && (
              <ul className="space-y-4">
                {FilterSearch(data.results)
                  .slice(0, 5)
                  .map((result) => (
                    <li key={result.id}>
                      <Link href={`${result.media_type}/${result.id}`}>
                        <div className="flex rounded-md transition-all duration-150 hover:scale-105 hover:bg-black/50">
                          <Image
                            src={
                              result.poster_path
                                ? `https://image.tmdb.org/t/p/w154${result.poster_path}`
                                : fallbackImage
                            }
                            alt="Poster"
                            width={80}
                            height={120}
                            className="h-auto w-20 rounded-md object-cover"
                          />

                          <div className="space-y-2 pl-2">
                            <p className="font-medium">
                              {result.title || result.name}
                            </p>
                            <p className="font-light">
                              {new Date(
                                result.release_date ||
                                  result.first_air_date ||
                                  "",
                              ).getFullYear()}
                            </p>
                            <p className="font-light text-muted-foreground">
                              {result.media_type === "movie"
                                ? "Movie"
                                : "TV Show"}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
            {(!isLoading && !data) || data?.results?.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground">
                No results found
              </p>
            ) : null}
          </PopoverContent>
        </Popover>
      </div>
      <button
        onClick={toggleSearch}
        className={`relative z-10 transition-opacity duration-300 ${
          isSearchIconVisible ? "block" : "hidden"
        }`}
        aria-label="Open search"
      >
        <Search className="size-6 text-muted-foreground hover:text-foreground" />
      </button>
    </div>
  );
}
