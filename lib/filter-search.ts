import { SearchMulti200ResponseResultsInner } from "@/tmbd-types/api";

export function FilterSearch(results: SearchMulti200ResponseResultsInner[]) {
  return results
    ?.filter(
      (result) =>
        result.media_type !== "person" &&
        result.popularity &&
        result.popularity > 10,
    )
    .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
}
