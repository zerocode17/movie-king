"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function ErrorUi() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="space-y-4 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
        <h1 className="text-2xl font-semibold">Oops! Something went wrong</h1>
        <p className="text-muted-foreground">
          We couldn&apos;t load the data for this page.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline">
          Try Again
        </Button>
      </div>
    </div>
  );
}
