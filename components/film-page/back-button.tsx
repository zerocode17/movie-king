"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        const prevPage = document.referrer;
        if (prevPage) {
          router.back();
        } else {
          router.push("/");
        }
      }}
      className="absolute left-8 top-8 z-20 text-white transition-colors hover:text-gray-300"
      aria-label="Go back"
    >
      <ArrowLeft size={32} />
    </button>
  );
}
