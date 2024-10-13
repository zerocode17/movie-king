"use client";

import { Input } from "../ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    params.get("query") && setSearchQuery(params.get("query") ?? "");
  }, [params]);

  const debounced = useDebouncedCallback(
    (query: string) => router.push(`/search?query=${query}`),
    400,
  );

  return (
    <>
      <Input
        placeholder="Search for Movies or TV Shows"
        className="peer rounded-full border-none px-5 pl-12 text-base transition-all duration-300 focus-visible:ring-white sm:h-16 sm:py-4"
        value={searchQuery}
        onChange={(e) => debounced(e.target.value)}
        onInput={(e) => setSearchQuery(e.currentTarget.value)}
      />
      <SearchIcon className="absolute left-4 top-[10px] size-5 bg-background text-muted-foreground peer-focus-visible:text-white sm:top-[20px] sm:size-6" />
      {searchQuery && (
        <X
          className="absolute right-4 top-[10px] size-5 bg-background text-muted-foreground hover:cursor-pointer hover:text-white sm:top-[20px] sm:size-6"
          onClick={() => {
            setSearchQuery("");
            router.push("/search?query=");
          }}
        />
      )}
    </>
  );
}
