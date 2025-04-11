import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import Image from "next/image";
import Navigation from "./components/Navigation";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circle of Intimacy | A place where intimacy deepens, strength is renewed, and restoration takes place.",
  description: "Circle of Intimacy is a sacred gathering where worship meets truth. Join our community for nights of authentic worship, prayer, and spiritual connection.",
  keywords: "Circle of Intimacy, worship event, spiritual gathering, prayer night, Christian community",
  metadataBase: new URL("https://circleofintimacy.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Circle of Intimacy | A place where intimacy deepens, strength is renewed, and restoration takes place.",
    description: "Circle of Intimacy is a sacred gathering where worship meets truth. Join our community for nights of authentic worship, prayer, and spiritual connection.",
    url: "https://circleofintimacy.org",
    siteName: "Circle of Intimacy",
    images: [
      {
        url: "https://circleofintimacy.org/coi-img.jpg",
        width: 1200,
        height: 630,
        alt: "Circle of Intimacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circle of Intimacy | A Night Where Worship Meets Truth",
    description: "Circle of Intimacy is a sacred gathering where worship meets truth. Join our community for nights of authentic worship, prayer, and spiritual connection.",
    images: ["https://circleofintimacy.org/coi-img.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL will be handled by Next.js metadata */}
      </head>
      <body className={`${sourceSans3.className}   antialiased bg-background`}>
        <HamburgerMenu />
        <Navigation />
        <div className="flex items-center absolute top-10 left-5 z-20">
          <a target="_blank" href="https://www.instagram.com/circleofintimacy/">
            <Image
              src="Instagram.svg"
              width={40}
              height={40}
              alt="Circle of Intimacy Instagram"
              className="mr-2"
            />
          </a>
        </div>

        {children}

        <div className="mt-10 p-2 md:p-4">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
