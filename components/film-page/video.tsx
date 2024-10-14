import { MovieVideos200ResponseResultsInner } from "@/tmbd-types/api";

export default function Video({
  videos,
}: {
  videos: MovieVideos200ResponseResultsInner[];
}) {
  const trailer = videos?.find((video) => video.type === "Trailer")?.key;

  return (
    <div>
      <h2 className="pb-4 text-2xl font-bold">Trailer</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer}?vq=hd1080&modestbranding=1&rel=0&iv_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="aspect-video h-auto w-full border-[0px]"
        allowFullScreen
      />
    </div>
  );
}
