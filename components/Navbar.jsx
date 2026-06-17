"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Get in Touch" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-blush/80 backdrop-blur-md sticky top-0 z-50 rose-border border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
<Link href="/" className="flex items-center gap-3">
  {/* Circular logo placeholder */}
  <div className="w-11 h-11 rounded-full bg-mauve flex items-center justify-center text-white text-lg font-bold shrink-0 overflow-hidden">
    <span className="font-script text-sm">F</span>
  </div>
  <div className="flex flex-col leading-none">
    <span style={{ fontFamily: '"Cormorant Garamond", serif' }} className="text-4xl text-mauve tracking-wide font-bold italic">Florified</span>
    <span className="text-[10px] text-rose font-body tracking-[0.25em] uppercase mt-0.5">
      by her
    </span>
  </div>
</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm tracking-wide transition-colors duration-200 hover:text-mauve ${
                  pathname === href
                    ? "text-mauve font-semibold border-b-2 border-rose pb-0.5"
                    : "text-plum"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
<Link
  href="/products"
  className="hidden md:inline-block bg-mauve text-white text-sm font-body font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-plum transition-colors duration-200"
>
  Order Now 🌸
</Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-mauve transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-mauve transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-mauve transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blush border-t rose-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-sm tracking-wide py-1 transition-colors hover:text-mauve ${
                pathname === href ? "text-mauve font-semibold" : "text-plum"
              }`}
            >
              {label}
            </Link>
          ))}
          {/* Desktop CTA */}
<Link
  href="/products"
  className="hidden md:inline-block bg-mauve text-white text-sm font-body font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-plum transition-colors duration-200"
>
  Order Now 🌸
</Link>
        </div>
      )}
    </nav>
  );
}
