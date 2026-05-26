import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import sushi from "../assets/food-sushi.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  useEffect(() => {
    if (!phoneRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-line",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-40 px-6 md:px-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(0.62_0.22_22/0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="reveal-line text-xs uppercase tracking-[0.3em] text-primary mb-4">
              03 — The experience
            </p>
            <h2 className="reveal-line font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              A pocket-sized <br />
              <span className="text-gradient italic">food universe.</span>
            </h2>
            <p className="reveal-line text-muted-foreground text-lg max-w-md mb-8">
              From discovery to doorstep — every interaction is engineered to
              feel effortless, beautiful, and indulgent.
            </p>
            <div className="reveal-line space-y-4">
              {[
                "Real-time tracking with cinematic maps",
                "Curated collections from local tastemakers",
                "One-tap reservations at premium venues",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 glow-primary" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <motion.div
            ref={phoneRef}
            style={{ rotate, y }}
            className="relative mx-auto"
          >
            <div className="relative w-[280px] md:w-[340px] h-[580px] md:h-[700px] rounded-[3rem] glass-strong p-3 shadow-elegant">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-3xl z-20" />
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-card to-background relative">
                <div className="p-6 pt-12 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-display text-xl text-gradient font-bold">
                      zomato
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Tonight in Mumbai
                  </p>
                  <h3 className="font-display text-2xl font-semibold mb-4">
                    Omakase awaits.
                  </h3>

                  <div className="glass rounded-2xl p-3 mb-3 flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        Sakura Omakase
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        ★ 4.9 · 35 min
                      </p>
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-3 mb-3 flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        Aurora Rooftop
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        ★ 4.8 · 30 min
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <img
                      src={sushi}
                      alt=""
                      className="w-full h-32 object-contain animate-float"
                    />
                    <button className="w-full bg-gradient-primary text-primary-foreground rounded-2xl py-3 text-sm font-medium mt-2">
                      Reserve a table
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* glow */}
            <div className="absolute -inset-10 bg-primary/20 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
