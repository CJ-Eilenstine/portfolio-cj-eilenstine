import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";

const comfortaa = localFont({
  src: "./fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf",
  variable: "--font-comfortaa",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio for CJ Eilenstine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <body className={`${comfortaa.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
