"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-10 right-5 hidden md:block z-10">
      <ul className="flex gap-4 text-xl font-light md:text-2xl">
        <li className="group">
          <Link href="/" className="relative inline-block">
            Home
            <span
              className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-all duration-300 ease-out
                ${pathname === "/" ? "scale-x-100" : "scale-x-0"}
                group-hover:scale-x-100`}
            />
          </Link>
        </li>
        <li className="group">
          <Link href="/about" className="relative inline-block">
            About
            <span
              className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-all duration-300 ease-out
                ${pathname === "/about" ? "scale-x-100" : "scale-x-0"}
                group-hover:scale-x-100`}
            />
          </Link>
        </li>
        <li className="group">
          <Link href="/store" className="relative inline-block">
            Store
            <span
              className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-all duration-300 ease-out
                ${pathname === "/store" ? "scale-x-100" : "scale-x-0"}
                group-hover:scale-x-100`}
            />
          </Link>
        </li>
        <li className="group">
          <a
            target="_blank"
            href="https://cash.app/$CircleOfIntimacy1"
            className="relative inline-block"
          >
            Give
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
