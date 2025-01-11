import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import Image from "next/image";
import Navigation from "./components/Navigation";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circle of Intimacy",
  description: "Ciricle of Intimacy, A night where worship meets truth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className}   antialiased bg-background`}>
        <HamburgerMenu />
        <Navigation />
        <div className="flex items-center absolute top-10 left-5">
          <a target="_blank" href="https://www.instagram.com/circleofintimacy/">
            <Image
              src="/assets/Instagram.svg"
              width={40}
              height={40}
              alt="Instagram icon"
              className="mr-2"
            />
          </a>
          <p className="md:text-2xl">Cart(0)</p>
        </div>

        {children}

        <div className="mt-10 p-2 md:p-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
