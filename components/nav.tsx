"use client";

import Link from "next/link";
import { Search, User, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Input } from "./ui/input";
import { useDebounce } from "use-debounce";

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSearchIconVisible, setIsSearchIconVisible] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery] = useDebounce(searchInput, 500);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollPosition(window.scrollY);
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const toggleSearch = () => {
    if (!isSearchOpen) {
      setIsSearchVisible(true);
      setIsSearchIconVisible(false);
      setTimeout(() => {
        setIsSearchOpen(true);
        searchInputRef.current?.focus();
      }, 10);
    } else {
      setIsSearchOpen(false);
      searchInputRef.current?.blur();
      setTimeout(() => {
        setIsSearchVisible(false);
        setIsSearchIconVisible(true);
      }, 300); // match this with transition duration
    }
  };

  const fetchSearchResults = debounce(() => {
    console.log(searchQuery);
  }, 500);

  return (
    <header
      className={`fixed top-0 z-50 h-14 w-full transition-colors duration-300 ease-out hover:bg-black ${
        scrollPosition >= 300 ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-full items-center px-4 xl:px-0">
        <Link
          className="flex items-center text-xl font-bold text-foreground"
          href="/"
        >
          <span className="sr-only">Movie King</span>
          Movie King
        </Link>
        <nav className="mx-6 hidden items-center space-x-4 text-lg font-semibold md:flex lg:space-x-6">
          <Link className="text-foreground hover:text-primary" href="/">
            Home
          </Link>
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="/tv-shows"
          >
            TV Shows
          </Link>
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="/movies"
          >
            Movies
          </Link>
          <Link
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="/popular"
          >
            New & Popular
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative flex items-center">
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
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="h-8 w-full rounded-full py-1.5 text-sm"
                aria-label="Search movies and TV shows"
                onInput={(e) => {
                  setSearchInput(e.currentTarget.value);
                }}
                onKeyUp={fetchSearchResults}
              />
              <button
                onClick={toggleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                aria-label="Close search"
              >
                <X className="size-5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <button
              onClick={toggleSearch}
              className={`relative z-10 transition-opacity duration-300 ${
                isSearchIconVisible ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Open search"
            >
              <Search className="size-6 text-muted-foreground hover:text-foreground" />
            </button>
          </div>
          <button aria-label="User profile">
            <User className="size-6 text-muted-foreground hover:text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
