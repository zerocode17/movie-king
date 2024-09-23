"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import NavSearch from "./nav-search";

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  return (
    <header
      className={`fixed top-0 z-50 h-14 w-full transition-colors duration-300 ease-out hover:bg-black ${
        scrollPosition >= 300 ? "bg-black" : "bg-gradient-to-b from-black"
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
          <NavSearch />
          <button aria-label="User profile">
            <User className="size-6 text-muted-foreground hover:text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
