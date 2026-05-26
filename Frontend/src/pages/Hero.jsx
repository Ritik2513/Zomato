import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="discover"
      className="relative min-h-screen w-full overflow-hidden noise"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        )}
      </div>

      {/* radial vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.1_0.01_20/0.85)_85%)]" />

      {/* content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          A new era of food discovery
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl"
        >
          Discover the city <br />
          <span className="text-gradient italic">through food.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
        >
          Order, explore and experience restaurants like never before — a
          cinematic journey through every flavor of your city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="glass-strong mt-14 w-full max-w-4xl rounded-2xl px-6 md:px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 shadow-elegant"
        >
          {[
            { value: "3,00,000+", label: "Restaurants" },
            { value: "800+", label: "Cities" },
            { value: "3 Billion+", label: "Orders delivered" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={
                "flex flex-col items-center text-center px-4 " +
                (i !== 0 ? "md:border-l border-white/10" : "")
              }
            >
              <span className="font-display text-4xl md:text-5xl font-bold text-gradient leading-none">
                {s.value}
              </span>
              <span className="mt-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
