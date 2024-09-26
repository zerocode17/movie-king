import CategoryShelf from "./category-shelf";
import { Content } from "@/lib/types";

export default function MainCatalog({ data }: { data: Content[] }) {
  return (
    <section className="container -top-44 left-0 right-0 mx-auto px-3 py-8 sm:absolute">
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
