import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";

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
        <HamburgerMenu/>
        {children}

<div className="mt-10">
      <Footer/>
</div>
      </body>
    </html>
  );
}
