import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail } from "lucide-react";
import { siteConfig, credit } from "@/data/site";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/formations", label: "Formations" },
  { href: "/promo-vacances", label: "Promo Vacances" },
  { href: "/services", label: "Services" },
  { href: "/galerie", label: "Galerie" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { socials } = siteConfig;
  const hasSocials = Object.values(socials).some(Boolean);

  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="container-jst py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo/jstech-logo.png"
            alt="JS TECH"
            width={112}
            height={112}
            className="h-16 w-16 object-contain mb-4"
          />
          <p className="text-sm leading-relaxed text-white/60">
            {siteConfig.name} — Centre de formation professionnelle en TIC.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Localisation</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
            <br />
            {siteConfig.address.city} — {siteConfig.address.country}
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone size={16} /> {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            {siteConfig.email && (
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail size={16} /> {siteConfig.email}
                </a>
              </li>
            )}
          </ul>

          {hasSocials && (
            <div className="mt-5 flex gap-3">
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              )}
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-jst py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {year} {siteConfig.shortName}. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white/70">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white/70">
              Confidentialité
            </Link>
          </div>
          <p>
            Site conçu par{" "}
            <a href={credit.url} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
              {credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
