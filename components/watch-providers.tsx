"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Movie } from "@/lib/types";
import {
  MovieWatchProviders200ResponseResults,
  MovieWatchProviders200ResponseResultsDEBuyInner,
  MovieWatchProviders200ResponseResultsUS,
  MovieWatchProviders200ResponseResultsUSFlatrateInner,
  MovieWatchProviders200ResponseResultsUSRentInner,
} from "@/tmbd-types/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WatchProviders({
  watchProviders,
}: {
  watchProviders: Movie["watch/providers"]["results"];
}) {
  const [selectedCountry, setSelectedCountry] = useState("US");

  if (!watchProviders || Object.keys(watchProviders).length === 0) {
    return null;
  }

  const availableCountries = Object.keys(watchProviders);

  const currentProviders = watchProviders[
    selectedCountry as keyof typeof watchProviders
  ] as MovieWatchProviders200ResponseResultsUS | undefined;

  const getProviderLogos = (
    providers:
      | MovieWatchProviders200ResponseResultsDEBuyInner[]
      | MovieWatchProviders200ResponseResultsUSRentInner[]
      | MovieWatchProviders200ResponseResultsUSFlatrateInner[],
  ) => {
    return providers.map((provider, index) => (
      <div className="w-fit">
        <Image
          key={index}
          src={`https://image.tmdb.org/t/p/w154${provider.logo_path}`}
          alt={`${provider.provider_name} logo`}
          width={50}
          height={50}
          className="rounded-lg object-cover"
        />
        <div className="max-w-16">
          <span className="text-wrap text-xs leading-3">
            {provider.provider_name}
          </span>
        </div>
      </div>
    ));
  };
  return (
    <div className="w-full max-w-[400px]">
      <h2 className="mb-4 text-2xl font-bold">Watch Providers</h2>
      <Select onValueChange={(value) => setSelectedCountry(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {availableCountries.map((country) => (
            <SelectItem key={country} value={country}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedCountry && currentProviders && (
        <div className="mt-4">
          <h3 className="mb-2 text-xl font-semibold">
            Available options in {selectedCountry}:
          </h3>
          {currentProviders.buy && (
            <div className="mb-8">
              <h4 className="mb-2 text-xl font-semibold">Buy</h4>
              <div className="flex flex-wrap content-start gap-4">
                {getProviderLogos(currentProviders.buy)}
              </div>
            </div>
          )}
          {currentProviders.rent && (
            <div className="mb-8">
              <h4 className="mb-2 text-xl font-semibold">Rent</h4>
              <div className="flex flex-wrap content-start gap-4">
                {getProviderLogos(currentProviders.rent)}
              </div>
            </div>
          )}
          {currentProviders.flatrate && (
            <div className="mb-8">
              <h4 className="mb-2 text-xl font-semibold">Streaming</h4>
              <div className="flex flex-wrap content-start gap-4">
                {getProviderLogos(currentProviders.flatrate)}
              </div>
            </div>
          )}
          <Link
            href={`${currentProviders.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View all watching options
          </Link>
        </div>
      )}
    </div>
  );
}
