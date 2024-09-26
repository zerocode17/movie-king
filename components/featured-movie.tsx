import { Button } from "@/components/ui/button";
import {
  MovieDetails200Response,
  MovieImages200Response,
} from "@/tmbd-types/api";
import { Info, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Featured extends MovieDetails200Response {
  "images?include_image_language=en": MovieImages200Response;
}

export default async function FeaturedMovie({
  id,
  type,
}: {
  id: string;
  type?: "movie" | "tv";
}) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?append_to_response=images?include_image_language=en&language=en-US`,
    options,
  );
  const featured: Featured = await response.json();
  const images = featured["images?include_image_language=en"];

  const logoSource = images.logos && images.logos[0].file_path;
  const logoWidth = images.logos && images.logos[0].width;
  const logoHeight = images.logos && images.logos[0].height;

  return (
    <section className="relative h-[95vh] px-2">
      {/* background image */}
      <Image
        alt="Featured movie"
        className="object-cover"
        fill
        sizes="100vw"
        priority
        src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
      />
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent via-[23%]" />

      {/* logo, overview and buttons */}
      <div className="container relative mx-auto h-full w-full px-3 sm:px-0">
        <div className="absolute bottom-0 pb-8 sm:bottom-48 sm:pb-12">
          <div className="pb-4">
            <Image
              src={`https://image.tmdb.org/t/p/original${logoSource}`}
              alt={`${featured.title} logo`}
              className="h-auto w-full sm:max-w-sm lg:max-w-md"
              width={logoWidth}
              height={logoHeight}
              sizes="(min-width: 2060px) 11.6vw, (min-width: 1940px) 22vw, (min-width: 1280px) 23.28vw, (min-width: 940px) 31.88vw, (min-width: 640px) calc(4.29vw + 255px), (min-width: 480px) 37.86vw, calc(3.75vw + 157px)"
            />
          </div>
          <p className="mb-4 hidden max-w-lg text-pretty text-base sm:block">
            {featured.overview}
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            <Link href={`${type}/${featured.id}`}>
              <Button className="h-9 text-lg font-bold sm:h-11 sm:px-6">
                <Play className="mr-2 size-6" fill="black" /> Play
              </Button>
            </Link>
            <Link href={`${type}/${featured.id}`}>
              <Button
                className="h-9 text-lg font-bold sm:h-11 sm:px-6"
                variant={"secondary"}
              >
                <Info className="mr-2 size-6" /> More Info
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
