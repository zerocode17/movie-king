import Nav from "@/components/nav/nav";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      {children}
    </div>
  );
}
