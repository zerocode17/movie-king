import FilmPoster from "@/components/film-poster";
import SearchInput from "@/components/search-input";
import { FilterSearch } from "@/lib/filter-search";
import {
  SearchMulti200Response,
  SearchMulti200ResponseResultsInner,
} from "@/tmbd-types/api";

export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;

  let results: SearchMulti200ResponseResultsInner[] | undefined = [];

  if (query) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&language=en-US&page=1}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
          },
        },
      );
      const data: SearchMulti200Response = await response.json();
      if (data.results) {
        results = FilterSearch(data.results);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <div className="container mx-auto mt-5 flex flex-col items-center px-4 2xl:mt-32">
        <h1 className="glow hidden text-8xl font-bold uppercase transition-all delay-300 duration-300 animate-in fade-in 2xl:block">
          Movie King
        </h1>
        <div className="relative h-fit w-full max-w-lg rounded-full 2xl:mt-28">
          <SearchInput />
        </div>
        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {results &&
            results.map((result) => (
              <div key={result.id}>
                <FilmPoster
                  type={(result.media_type as "movie" | "tv") ?? "all"}
                  film={result}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
