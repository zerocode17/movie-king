"use client";

import { useState } from "react";
import Link from "next/link";

export default function WatchSources({
  id,
  type,
}: {
  id: string;
  type: string;
}) {
  const [tab, setTab] = useState("streaming");

  const streamingSources = [
    "https://www.braflix.gd/",
    "https://freek.to/watch/",
  ];

  return (
    <div className="">
      <div className="relative flex text-muted-foreground">
        <span
          onClick={() => setTab("streaming")}
          className={`${tab === "streaming" && "text-white transition-colors duration-300"}`}
        >
          Streaming
        </span>
        <span
          onClick={() => setTab("download")}
          className={`pl-12 ${tab === "download" && "text-white transition-colors duration-300"}`}
        >
          Download
        </span>
        <div
          className={`absolute -bottom-1 h-[2px] w-[76px] bg-white transition-transform duration-300 ${tab === "streaming" ? "left-0" : "translate-x-[124px]"}`}
        />
      </div>
      <div className="pt-6">
        {tab === "streaming" && (
          <ul>
            {streamingSources.map((source) => (
              <li className="pt-2">
                <Link
                  href={`${source}${type}/${id}`}
                  className="hover:underline"
                >
                  {`${source}${type}/${id}`}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {tab === "download" && <p>Not implemented yet</p>}
      </div>
    </div>
  );
}
