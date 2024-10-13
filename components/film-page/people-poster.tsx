import {
  MovieCredits200ResponseCastInner,
  TvSeriesCredits200ResponseCastInner,
} from "@/tmbd-types/api";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { User } from "lucide-react";

export default function PeoplePoster({
  person,
}: {
  person:
    | MovieCredits200ResponseCastInner
    | TvSeriesCredits200ResponseCastInner;
}) {
  return (
    <div className="flex w-full max-w-[264px] items-center space-x-4">
      {person.profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
          alt={person.name || "Cast poster"}
          width={184}
          height={276}
          className="w-20 rounded-md object-cover"
        />
      ) : (
        <div className="aspect-[0.667] w-20 items-center">
          <User className="h-full w-full" />
        </div>
      )}
      <div>
        <p className="text-sm font-bold">{person.name}</p>
        <p className="text-sm text-muted-foreground">{person.character}</p>
      </div>
    </div>
  );
}
