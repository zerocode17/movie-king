import {
  MovieCredits200Response,
  TvSeriesCredits200Response,
} from "@/tmbd-types/api";
import PeoplePoster from "./people-poster";

export default function Credits({
  credits,
}: {
  credits: MovieCredits200Response | TvSeriesCredits200Response;
}) {
  return (
    <div className="flex flex-col">
      <h2 className="pb-4 text-2xl font-bold">Cast</h2>
      <div className="flex h-fit flex-wrap items-start gap-4">
        {credits.cast
          ?.slice(0, 12)
          .map((cast) => <PeoplePoster key={cast.id} person={cast} />)}
      </div>
    </div>
  );
}
