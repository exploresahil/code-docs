import type { Metadata, Viewport } from "next";
import { useFonts } from "@/hooks/useFonts";
import "@/app/(client)/scss/globals.scss";
import Header from "@/components/default/header/Header";
import { MarkdownFile } from "@/types/types";
import Nav from "@/components/nav/Nav";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "the circle studio | docs",
  description:
    "full-stack designer, personal portfolio, Sahil Satpute, projects, front-end developer, react developer, next js developer, ui-ux developer",
};

async function getData(): Promise<MarkdownFile[]> {
  const res = await fetch("http://localhost:3000/api/markdowns", {
    next: { revalidate: 3600 },
    //cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = useFonts();
  const data: MarkdownFile[] = await getData();

  const sortedData = data.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <html lang="en">
      <body className={fontClasses}>
        <Header />
        <main>
          <Nav data={sortedData} />
          {children}
        </main>
      </body>
    </html>
  );
}
