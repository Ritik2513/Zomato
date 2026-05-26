import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const perks = [
  "Up to 40% off at 20,000+ restaurants",
  "Free delivery on orders above ₹199",
  "Priority customer support, 24/7",
  "Exclusive members-only tasting events",
];

export function Gold() {
  return (
    <section id="gold" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.18_75/0.18),transparent_60%)]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[oklch(0.82_0.16_85)] mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Membership
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.02]">
              Zomato{" "}
              <span
                className="italic"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.16 88), oklch(0.68 0.18 65))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Gold
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md text-lg">
              An invitation-only tier for those who live to dine. Indulge in
              privileges curated for the city's most discerning palates.
            </p>
            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.88 0.16 88), oklch(0.62 0.18 60))",
                    }}
                  >
                    <Check className="w-3 h-3 text-background" />
                  </span>
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <button
                className="rounded-full px-8 py-4 text-sm font-medium text-background hover:scale-105 transition-transform"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.16 88), oklch(0.62 0.18 60))",
                  boxShadow: "0 20px 60px -20px oklch(0.72 0.18 75 / 0.6)",
                }}
              >
                Join Zomato Gold
              </button>
              <button className="glass rounded-full px-8 py-4 text-sm font-medium hover:bg-white/10 transition">
                Learn more
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-[1200px]"
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative aspect-[1.6/1] rounded-3xl p-8 overflow-hidden shadow-elegant"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.32 0.05 60), oklch(0.18 0.02 40) 50%, oklch(0.28 0.06 55))",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, oklch(0.88 0.16 88 / 0.4), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.62 0.18 60 / 0.3), transparent 40%)",
                }}
              />
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30"
                style={{
                  background: "oklch(0.88 0.16 88)",
                }}
              />
              <div className="relative h-full flex flex-col justify-between text-foreground">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">
                      Zomato
                    </p>
                    <p
                      className="font-display text-3xl mt-1"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.92 0.14 88), oklch(0.72 0.18 65))",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Gold
                    </p>
                  </div>
                  <Sparkles
                    className="w-6 h-6"
                    style={{ color: "oklch(0.88 0.16 88)" }}
                  />
                </div>
                <div>
                  <p className="font-mono text-lg tracking-[0.2em] opacity-80">
                    •••• •••• •••• 2025
                  </p>
                  <div className="mt-4 flex justify-between items-end text-xs opacity-70">
                    <span className="uppercase tracking-widest">
                      Member since 2024
                    </span>
                    <span className="uppercase tracking-widest">
                      Tier · Élite
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
