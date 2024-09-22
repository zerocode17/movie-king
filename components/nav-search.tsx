"use client";

import { X, Search } from "lucide-react";
import { useState, useRef } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";
import { Popover, PopoverContent } from "./ui/popover";

export default function NavSearch() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchIconVisible, setIsSearchIconVisible] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery] = useDebounce(searchInput, 500);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

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
      <Popover>
        <PopoverContent>test</PopoverContent>
      </Popover>
    </div>
  );
}
