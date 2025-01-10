'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
      <nav className="absolute top-10 right-5 hidden md:block">
        <ul className="gap-4 text-xl font-light flex">
          <li>
            <Link href="/" className="relative group">
              Home
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out
                ${pathname === '/' ? 'scale-x-100' : 'scale-x-0'}
                group-hover:scale-x-100`}
              />
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative group">
              About
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out
                ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0'}
                group-hover:scale-x-100`}
              />
            </Link>
          </li>
          <li>
            <Link href="/store" className="relative group">
              Store
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out
                ${pathname === '/store' ? 'scale-x-100' : 'scale-x-0'}
                group-hover:scale-x-100`}
              />
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://cash.app/$CircleOfIntimacy1"
              className="relative group"
            >
              Give
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
        </ul>
      </nav>
  );
}