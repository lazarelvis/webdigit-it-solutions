import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import Navbar from "./components/Navbar/resizable-navbar-demo";
import Head from "next/head";
import Script from "next/script";
const popins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title:
    "Webdigit: Creare Site-uri Profesionale pentru Afaceri Locale în Brașov",
  description:
    "Creăm site-uri web profesionale pentru afaceri locale din Brașov. Contactează-ne pentru o prezență online de succes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-4E2WHDJLZ9`}
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4E2WHDJLZ9');
          `}
        </Script>
      </head>
      <body>
        <div
          className={`whole-body-content webdigit ${popins.className} font-semibold`}
        >
          <header className="NavbarAndHero">
            {/* <Header /> */}
            <Navbar />
          </header>
        </div>
        <main className={`${popins.className}`}>{children}</main>
        <div className="Footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
