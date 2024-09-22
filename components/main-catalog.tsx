import CategoryShelf from "./category-shelf";
import { Content } from "@/lib/types";

export default function MainCatalog({ data }: { data: Content[] }) {
  return (
    <section className="container mx-auto px-3 py-8 sm:px-0">
      {data.map((shelf, idx) => (
        <CategoryShelf
          category={shelf.category}
          films={shelf.films}
          type={shelf.type}
          key={idx}
        />
      ))}
    </section>
  );
}
