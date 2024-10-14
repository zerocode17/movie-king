import {
  DiscoverMovie200ResponseResultsInner,
  DiscoverTv200ResponseResultsInner,
  MovieCredits200Response,
  MovieDetails200Response,
  MovieVideos200Response,
  MovieWatchProviders200Response,
  TrendingTv200ResponseResultsInner,
  TvSeriesCredits200Response,
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
  videos: MovieVideos200Response;
  credits: MovieCredits200Response;
}

export interface TvShow extends TvSeriesDetails200Response {
  "watch/providers": TvSeriesWatchProviders200Response;
  videos: MovieVideos200Response;
  credits: TvSeriesCredits200Response;
}
