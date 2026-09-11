"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { ArrowRight, MonitorSmartphone } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(1100px 500px at 85% -10%, rgba(242,123,27,0.28), transparent), radial-gradient(900px 500px at -10% 110%, rgba(44,95,192,0.35), transparent)",
        }}
      />
      <div className="container-jst relative grid grid-cols-1 items-center gap-14 py-24 sm:py-28 lg:grid-cols-2 lg:py-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-flame-200">
            <MonitorSmartphone size={14} /> Centre de formation en TIC — Bohicon
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Développez vos compétences numériques avec JS TECH
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Un centre de formation professionnelle en TIC pour apprendre,
            progresser et mieux préparer son avenir académique et
            professionnel.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button href="/formations" variant="primary">
              Découvrir nos formations <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="ghost" className="!border-white/25 !text-white hover:!border-white/60">
              Nous contacter
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-soft">
            <Image
              src="/images/hero/placeholder-hero.jpg"
              alt="Formation numérique JS TECH"
              width={700}
              height={560}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
