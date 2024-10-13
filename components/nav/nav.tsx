"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import NavSearch from "./nav-search";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

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
        scrollPosition >= 300 || pathname !== "/"
          ? "bg-black"
          : "bg-gradient-to-b from-black"
      } ${pathname !== "/" && "relative"}`}
    >
      <div className="container mx-auto flex h-full items-center px-4 xl:px-0">
        <Link
          className="flex items-center text-xl font-bold text-foreground"
          href="/"
        >
          <span className="sr-only">Movie King</span>
          <Image src={logo} alt="Movie King Logo" className="size-11" />
        </Link>
        <nav className="mx-6 hidden items-center space-x-4 text-lg font-semibold md:flex lg:space-x-6">
          <Link
            className={`text-muted-foreground transition-colors hover:text-primary ${pathname === "/" && "text-primary"}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`text-muted-foreground transition-colors hover:text-foreground ${pathname === "/tv-shows" && "text-primary"}`}
            href="/tv-shows"
          >
            TV Shows
          </Link>
          <Link
            className={`text-muted-foreground transition-colors hover:text-foreground ${pathname === "/movies" && "text-primary"}`}
            href="/movies"
          >
            Movies
          </Link>
          <Link
            className={`text-muted-foreground transition-colors hover:text-foreground ${pathname === "/trending" && "text-primary"}`}
            href="/discover"
          >
            New & Popular
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          {pathname === "/search" ? (
            ""
          ) : (
            <div>
              <Link href={"/search"} className="sm:hidden">
                <Search className="size-6 text-muted-foreground hover:text-foreground" />
              </Link>
              <NavSearch />
            </div>
          )}
          <Link href={"/login"} aria-label="User profile">
            <User className="size-6 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </div>
    </header>
  );
}
