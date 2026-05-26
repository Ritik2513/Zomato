import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import rooftop from "../assets/rest-rooftop.jpg";
import italian from "../assets/rest-italian.jpg";
import sushi from "..//assets/rest-sushi.jpg";
import lounge from "../assets/rest-lounge.jpg";

const collections = [
  { title: "Rooftop Dining", count: 24, img: rooftop },
  { title: "Best Pizza Places", count: 38, img: italian },
  { title: "Romantic Restaurants", count: 19, img: lounge },
  { title: "Late Night Food", count: 47, img: sushi },
  { title: "Hidden Gems", count: 32, img: italian },
];

export function Collections() {
  const [active, setActive] = useState(2);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const dragRotate = useTransform(x, [-300, 300], [10, -10]);

  return (
    <section id="collections" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
          04 — Collections
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Stories told in <span className="text-gradient italic">flavors.</span>
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative h-[520px] flex items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -200, right: 200 }}
          dragElastic={0.15}
          style={{ x, rotateY: dragRotate }}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          {collections.map((c, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            return (
              <motion.div
                key={c.title}
                onClick={() => setActive(i)}
                animate={{
                  x: offset * 280,
                  scale: abs === 0 ? 1 : 0.8 - abs * 0.08,
                  rotateY: offset * -18,
                  z: -abs * 100,
                  opacity: abs > 2 ? 0 : 1 - abs * 0.25,
                  zIndex: 10 - abs,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute w-[300px] md:w-[380px] h-[460px] rounded-3xl overflow-hidden glass-strong shadow-elegant cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                    {c.count} places
                  </p>
                  <h3 className="font-display text-3xl font-bold mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Curated by Zomato editors
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {collections.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-10 bg-gradient-primary" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
