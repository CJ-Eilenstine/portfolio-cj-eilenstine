import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${comfortaa.variable}`}>
        <nav className="mainNav">
          <ul className="name">
            <li>
              <a>CJ Eilenstine</a>
            </li>
          </ul>
          <ul className="links">
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
