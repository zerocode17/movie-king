"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="absolute left-8 top-8 z-20 text-white transition-colors hover:text-gray-300"
      aria-label="Go back"
    >
      <ArrowLeft size={32} />
    </button>
  );
}
