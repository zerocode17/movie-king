"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { WatchProvidersAvailableRegions200ResponseResultsInner } from "@/tmbd-types/api";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

export default function CountryPicker({
  valueList,
  value,
  setValue,
}: {
  valueList?: WatchProvidersAvailableRegions200ResponseResultsInner[];
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  if (!valueList) {
    return null;
  }

  function getCountryISO(value: string) {
    return valueList?.find((region) => region.english_name === value)
      ?.iso_3166_1;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between bg-background text-foreground hover:bg-background/90"
        >
          {value ? (
            <div>
              <ReactCountryFlag countryCode={getCountryISO(value) ?? ""} svg />
              <span className="pl-2">{value}</span>
            </div>
          ) : (
            "Select a country"
          )}
          <ChevronDown className={`${open ? "rotate-180" : ""} duration-300`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 sm:w-[400px]" side="bottom">
        <Command>
          <CommandInput placeholder="Search countries" />
          <CommandList>
            <CommandEmpty>No country found</CommandEmpty>
            <CommandGroup>
              {valueList.map((country) => (
                <CommandItem
                  key={country.iso_3166_1}
                  value={country.english_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="m-0"
                >
                  <ReactCountryFlag
                    countryCode={country.iso_3166_1 ?? ""}
                    svg
                    className=""
                  />

                  <span className="pl-2">{country.english_name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
