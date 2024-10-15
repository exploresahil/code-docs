// useFonts.ts
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

const helveticaBold = localFont({
  src: "../app/(client)/fonts/HelveticaNowDisplay-Bold.woff",
  variable: "--font-helvetica-bold",
});
const helveticaLight = localFont({
  src: "../app/(client)//fonts/HelveticaNowDisplay-Light.woff",
  variable: "--font-helvetica-light",
});
const helveticaMedium = localFont({
  src: "../app/(client)/fonts/HelveticaNowDisplay-Medium.woff",
  variable: "--font-helvetica-medium",
});
const helveticaRegular = localFont({
  src: "../app/(client)/fonts/HelveticaNowDisplay-Regular.woff",
  variable: "--font-helvetica-regular",
});

export function useFonts() {
  const fonts = [
    helveticaBold.variable,
    helveticaLight.variable,
    helveticaMedium.variable,
    helveticaRegular.variable,
    GeistMono.variable,
    GeistSans.variable,
  ];

  return fonts.join(" ");
}
