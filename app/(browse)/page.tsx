import ErrorUi from "@/components/error-ui";
import MainCatalog from "@/components/home-page/main-catalog";
import FeaturedMovie from "@/components/home-page/featured-movie";
import { Content } from "@/lib/types/types";
import { TrendingAll200ResponseResultsInner } from "@/tmbd-types/api";

export const revalidate = 60 * 60 * 12;

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
    },
  };

  const endpoints = [
    {
      name: "Trending",
      url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      type: "all",
    },
    {
      name: "Movies",
      url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      type: "movie",
    },
    {
      name: "TV Shows",
      url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      type: "tv",
    },
    {
      name: "Apple TV Movies",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=2",
      type: "movie",
    },
    {
      name: "Apple TV Shows",
      url: "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=2",
      type: "tv",
    },
    {
      name: "Netflix Movies",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=8",
      type: "movie",
    },
    {
      name: "Netflix Shows",
      url: "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=8",
      type: "tv",
    },
    {
      name: "Max Movies",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=1899",
      type: "movie",
    },
    {
      name: "Max Shows",
      url: "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=1899",
      type: "tv",
    },
    {
      name: "Prime Movies",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=9",
      type: "movie",
    },
    {
      name: "Prime Shows",
      url: "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=9",
      type: "tv",
    },
    {
      name: "Disney Movies",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=337",
      type: "movie",
    },
    {
      name: "Disney Shows",
      url: "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=US&with_watch_providers=337",
      type: "tv",
    },
    {
      name: "Comedy",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&region=US&sort_by=popularity.desc&with_genres=35",
      type: "movie",
    },
    {
      name: "Popular",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      type: "movie",
    },
  ];

  const fetchPromises = endpoints.map((endpoint) =>
    fetch(endpoint.url, options)
      .then((res) => res.json())
      .then((data) => ({
        category: endpoint.name,
        films: data.results,
        type: endpoint.type as "movie" | "tv" | "all",
      })),
  );

  const content: Content[] = await Promise.all(fetchPromises);
  const trending = content[0].films as TrendingAll200ResponseResultsInner[];
  const id = trending[0].id ?? "";
  const type = trending[0].media_type as "movie" | "tv";

  if (!content) {
    return <ErrorUi />;
  }

  return (
    <main className="relative">
      <FeaturedMovie id={id.toString()} type={type} />
      <div className="relative">
        <MainCatalog data={content} />
      </div>
    </main>
  );
}
