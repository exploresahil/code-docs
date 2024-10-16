import type { Metadata, Viewport } from "next";
import { useFonts } from "@/hooks/useFonts";
import "@/app/(client)/scss/globals.scss";
import Header from "@/components/default/header/Header";
import { MarkdownFile } from "@/types/types";
import Nav from "@/components/nav/Nav";
import { getDocs } from "@/utils/GetDocs";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = useFonts();
  const data: MarkdownFile[] = getDocs();

  return (
    <html lang="en">
      <body className={fontClasses}>
        <Header />
        <main>
          <Nav data={data} />
          {children}
        </main>
      </body>
    </html>
  );
}
