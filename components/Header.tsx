"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/formations", label: "Formations" },
  { href: "/promo-vacances", label: "Promo Vacances" },
  { href: "/services", label: "Services" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(14,27,44,0.4)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-jst flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo/jstech-logo.png"
            alt="JS TECH — Jehovah Shammah Technologie"
            width={160}
            height={54}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-flame-600" : "text-ink-800 hover:text-azure-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            S&apos;inscrire
          </Button>
        </div>

        <MobileMenu links={navLinks} whatsapp={siteConfig.whatsappNumber} />
      </div>
    </header>
  );
}
