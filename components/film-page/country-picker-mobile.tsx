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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WatchProvidersAvailableRegions200ResponseResultsInner } from "@/tmbd-types/api";
import ReactCountryFlag from "react-country-flag";
import { useEffect, useState } from "react";

export default function CountryPickerMobile({
  valueList,
  value,
  setValue,
}: {
  valueList?: WatchProvidersAvailableRegions200ResponseResultsInner[];
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isKeyboard = window.innerHeight < window.outerHeight;
      setIsKeyboardVisible(isKeyboard);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!valueList) {
    return null;
  }

  function getCountryISO(value: string) {
    return valueList?.find((region) => region.english_name === value)
      ?.iso_3166_1;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent
        aria-describedby="country-picker-mobile-description"
        className={`"max-sm:absolute sm:translate-y-0" max-w-[350px] gap-0 rounded-md p-0 max-sm:top-[5%] max-sm:translate-y-0 sm:static sm:top-auto sm:max-w-[400px]`}
      >
        <DialogHeader className="border-b py-3">
          <DialogTitle>Select a country</DialogTitle>
        </DialogHeader>
        <Command>
          <CommandInput placeholder="Search countries" className="py-0" />
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
      </DialogContent>
    </Dialog>
  );
}
