import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import WatchSources from "./watch-sources";

export default function PlayDialog({ id, type }: { id: string; type: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="z-10 mb-12 text-lg font-bold sm:mb-0 sm:mt-20"
        >
          <Play className="mr-2 size-6" fill="black" /> Play
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Watch options</DialogTitle>
        </DialogHeader>
        <WatchSources id={id} type={type} />
      </DialogContent>
    </Dialog>
  );
}
