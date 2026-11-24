"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight, Mail } from "lucide-react";
const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Our Team", "/team"],
  ["Contact", "/contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(scrollTop >= 8);
    };
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    document.addEventListener("scroll", updateScrolled, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", updateScrolled);
      document.removeEventListener("scroll", updateScrolled, true);
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div>
            <a href="tel:+919815088606">
              <Phone size={13} /> +91 98150 88606
            </a>
            <a href="mailto:satyafacility8@gmail.com">
              <Mail size={13} /> satyafacility8@gmail.com
            </a>
          </div>
        </div>
      </div>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-wrap">
          <Link
            href="/"
            className="brand header-logo"
            aria-label="SATYA Facility Services home"
            onClick={() => setOpen(false)}
          >
            <Image src="/logo.png" alt="SATYA Facility Services" width={70} height={70} priority />
          </Link>
          <nav className={open ? "nav open" : "nav"}>
            {nav.map(([n, u]) => (
              <Link key={u} href={u} onClick={() => setOpen(false)}>
                {n}
              </Link>
            ))}
            <a className="mobile-nav-phone" href="tel:+919815088606" onClick={() => setOpen(false)}>
              <Phone size={16} /> +91 98150 88606
            </a>
            <Link
              className="nav-cta"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Consult <ArrowUpRight size={16} />
            </Link>
          </nav>
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
