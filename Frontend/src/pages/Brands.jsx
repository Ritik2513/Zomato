import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const brands = [
  {
    name: "Zomato",
    tagline: "Discover & dine",
    description: "Food delivery and restaurant discovery across 1,000+ cities.",
    url: "https://www.zomato.com",
    accent: "oklch(0.62 0.22 22)",
  },
  {
    name: "Blinkit",
    tagline: "In 10 minutes",
    description: "Groceries and essentials delivered to your door, instantly.",
    url: "https://blinkit.com",
    accent: "oklch(0.82 0.18 95)",
  },
  {
    name: "District",
    tagline: "Live the night",
    description: "Movies, events, dining out and experiences — one ticket away.",
    url: "https://www.district.in",
    accent: "oklch(0.65 0.2 295)",
  },
  {
    name: "Hyperpure",
    tagline: "For restaurants",
    description: "Farm-fresh supplies sourced directly for restaurant partners.",
    url: "https://www.hyperpure.com",
    accent: "oklch(0.65 0.16 155)",
  },
];

export function Brands() {
  return (
    <section id="brands" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our universe</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] max-w-2xl">
              One family. <span className="italic text-gradient">Four worlds.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Explore the constellation of brands shaping how India eats, shops and goes out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((b, i) => (
            <motion.a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl p-7 overflow-hidden block"
            >
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                style={{ background: b.accent }}
              />
              <div className="relative flex flex-col h-full min-h-[240px]">
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-display text-2xl font-black text-background shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${b.accent}, color-mix(in oklab, ${b.accent} 60%, black))`,
                      boxShadow: `0 10px 30px -10px ${b.accent}`,
                    }}
                    aria-hidden
                  >
                    {b.name[0]}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <div className="mt-auto">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {b.tagline}
                  </p>
                  <h3
                    className="font-display text-3xl font-bold mt-2"
                    style={{ color: b.accent }}
                  >
                    {b.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
