import {
  DiscoverMovie200ResponseResultsInner,
  DiscoverTv200ResponseResultsInner,
  MovieDetails200Response,
  MovieWatchProviders200Response,
  TrendingTv200ResponseResultsInner,
  TvSeriesDetails200Response,
  TvSeriesWatchProviders200Response,
} from "@/tmbd-types/api";

export interface Content {
  category: string;
  films:
    | DiscoverMovie200ResponseResultsInner[]
    | DiscoverTv200ResponseResultsInner[];
  type: "movie" | "tv" | "all";
}

export interface Shelf {
  category: string;
  films:
    | DiscoverMovie200ResponseResultsInner
    | TrendingTv200ResponseResultsInner;
}

export interface Movie extends MovieDetails200Response {
  "watch/providers": MovieWatchProviders200Response;
}

export interface TvShow extends TvSeriesDetails200Response {
  "watch/providers": TvSeriesWatchProviders200Response;
}
