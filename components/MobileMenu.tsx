"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

type Link_ = { href: string; label: string };

const extraLinks = [
  { href: "/actualites", label: "Actualités" },
  { href: "/faq", label: "FAQ" },
];

export default function MobileMenu({
  links,
}: {
  links: Link_[];
  whatsapp: string;
}) {
  const [open, setOpen] = useState(false);
  const allLinks = [...links, ...extraLinks];

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-900"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-30 border-t border-ink-900/10 bg-white shadow-soft"
          >
            <nav className="container-jst flex flex-col py-6">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18, delay: i * 0.03 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-ink-900 border-b border-ink-900/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-flame-500 px-6 py-3 text-sm font-semibold text-white"
              >
                S&apos;inscrire
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
