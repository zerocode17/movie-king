import { Button } from "@/components/ui/button";
import { MoviePopularList200ResponseResultsInner } from "@/tmbd-types/api";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedMovie({
  featured,
}: {
  featured: MoviePopularList200ResponseResultsInner;
}) {
  return (
    <section className="relative h-[70vh]">
      <Image
        alt="Featured movie"
        className="object-cover"
        fill
        priority
        src={`https://image.tmdb.org/t/p/original${featured.backdrop_path}`}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/75" />
      <div className="container relative mx-auto h-full w-full px-3 sm:px-0">
        <div className="absolute bottom-0 pb-8 sm:bottom-4 sm:pb-12">
          <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
            {featured.original_title}
          </h2>
          <p className="mb-4 hidden max-w-lg text-pretty text-sm sm:block">
            {featured.overview}
          </p>
          <Button className="h-9 px-3 sm:h-10 sm:px-4">
            <Play className="mr-2 size-4" />{" "}
            <Link href={`movie/${featured.id}`} className="text-sm">
              Watch Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
