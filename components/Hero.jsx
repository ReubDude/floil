'use client';

import { motion } from 'framer-motion';
import { hero } from '../lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Media layer: reserved 30–45s silent loop. Poster shows until videoSrc is set. */}
      <div className="absolute inset-0 -z-10">
        {hero.videoSrc ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.poster}
          >
            <source src={hero.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={hero.poster}
            alt="FLOIL professional hair foil"
            className="h-full w-full object-cover"
          />
        )}
        {/* Wash to keep type legible over imagery while staying bright/museum */}
        <div className="absolute inset-0 bg-gradient-to-b from-shell/70 via-shell/55 to-shell/85" />
      </div>

      <div className="container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-24">
        <motion.p
          className="kicker mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.kicker || 'The Future of Hair Foils'}
        </motion.p>

        <h1 className="font-display text-[15vw] font-semibold leading-[0.92] tracking-tightest sm:text-[10vw] lg:text-[8.5rem]">
          {hero.headline.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex max-w-3xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="max-w-md text-base leading-relaxed text-graphite sm:text-lg">
            {hero.sub}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={hero.primaryCta.href} className="btn-solid">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="container-x pb-8">
        <div className="rule" />
      </div>
    </section>
  );
}
