import { AppProvider } from "@/contexts/app/app-context";
import Navbar from "./_components/navbar/navbar";
import SVGSymbols from "./_components/svg/svg-symbols";
import "./globals.css";
import localFont from "next/font/local";
import Overlay from "./_components/overlay/overlay";

const dana = localFont({
  src: [
    {
      path: "../../public/fonts/dana/woff2/DanaFaNum-DemiBold.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/dana/woff2/DanaFaNum-DemiBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/dana/woff2/DanaFaNum-DemiBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dana",
  display: "swap",
});

const morabba = localFont({
  src: [
    {
      path: "../../public/fonts/morabba/woff2/Morabba-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/morabba/woff2/Morabba-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/morabba/woff2/Morabba-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-morabba",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`dark ${dana.variable} ${morabba.variable}`}
    >
      <body className="bg-gray-100 dark:bg-zinc-800">
        <SVGSymbols />
        <AppProvider>
          <Navbar />
          {children}
          <Overlay />
        </AppProvider>
      </body>
    </html>
  );
}
