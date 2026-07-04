'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-shell/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tightest sm:text-xl"
          aria-label="FLOIL home"
        >
          FLOIL
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-tight text-steel transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#partner" className="btn-solid !px-5 !py-2.5 text-[13px]">
          Contact
        </a>
      </nav>
    </header>
  );
}
