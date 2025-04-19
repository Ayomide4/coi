'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  // helper to detect active state
  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + '/');

  return (
    <nav className="absolute top-10 right-5 hidden md:block z-30">
      <ul className="flex gap-4 text-xl font-medium md:text-2xl text-white">
        {[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/gallery', label: 'Gallery' },
          { href: '/give', label: 'Give' },
        ].map(({ href, label }) => (
          <li key={href} className="group">
            <Link href={href} className="relative inline-block">
              {label}
              <span
                className={[
                  'absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-all duration-300 ease-out',
                  // if active, fully scaled
                  isActive(href) ? 'scale-x-100' : 'scale-x-0',
                  // always allow hover
                  'group-hover:scale-x-100',
                ].join(' ')}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
