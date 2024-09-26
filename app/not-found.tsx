import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-foreground">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mx-auto max-w-md text-xl text-muted-foreground">
          Oops! It seems the scene you&apos;re looking for is not in our reel.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
