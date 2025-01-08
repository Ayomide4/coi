import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Circle of Intimacy",
  description: "Meet our team and learn about our vision at Circle of Intimacy.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
