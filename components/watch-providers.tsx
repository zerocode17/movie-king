"use client";

import { Movie } from "@/lib/types";
import {
  MovieWatchProviders200ResponseResultsDEBuyInner,
  MovieWatchProviders200ResponseResultsUS,
  MovieWatchProviders200ResponseResultsUSFlatrateInner,
  MovieWatchProviders200ResponseResultsUSRentInner,
  WatchProvidersAvailableRegions200ResponseResultsInner,
} from "@/tmbd-types/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CountryPicker from "./ui/country-picker";

export default function WatchProviders({
  watchProviders,
  availableRegions,
}: {
  watchProviders: Movie["watch/providers"]["results"];
  availableRegions?: WatchProvidersAvailableRegions200ResponseResultsInner[];
}) {
  const [selectedCountry, setSelectedCountry] = useState(
    "United States of America",
  );

  if (
    !watchProviders ||
    Object.keys(watchProviders).length === 0 ||
    !availableRegions
  ) {
    return null;
  }

  function getCountryISO(value: string) {
    return availableRegions?.find((region) => region.english_name === value)
      ?.iso_3166_1;
  }

  const currentProviders = watchProviders[
    getCountryISO(selectedCountry) as keyof typeof watchProviders
  ] as MovieWatchProviders200ResponseResultsUS | undefined;

  const getProviderLogos = (
    providers:
      | MovieWatchProviders200ResponseResultsDEBuyInner[]
      | MovieWatchProviders200ResponseResultsUSRentInner[]
      | MovieWatchProviders200ResponseResultsUSFlatrateInner[],
  ) => {
    return providers.map((provider, index) => (
      <div className="w-fit" key={index}>
        <Image
          src={`https://image.tmdb.org/t/p/w154${provider.logo_path}`}
          alt={`${provider.provider_name} logo`}
          width={50}
          height={50}
          className="rounded-lg object-cover"
        />
        <div className="max-w-16">
          <span className="text-wrap text-sm leading-[4px]">
            {provider.provider_name}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full max-w-[300px] xl:max-w-[400px]">
      <CountryPicker
        valueList={availableRegions?.sort((a, b) =>
          (a.english_name ?? "").localeCompare(b.english_name ?? ""),
        )}
        value={selectedCountry}
        setValue={setSelectedCountry}
      />

      {selectedCountry && currentProviders ? (
        <div className="mt-4">
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
      ) : (
        <div className="flex justify-center">
          <p className="pt-12 text-base text-muted-foreground">
            No providers available in this region
          </p>
        </div>
      )}
    </div>
  );
}
