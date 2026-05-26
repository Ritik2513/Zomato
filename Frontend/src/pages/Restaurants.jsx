import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";

import rooftop from "../assets/rest-rooftop.jpg";
import italian from "../assets/rest-italian.jpg";
import sushi from "../assets/rest-sushi.jpg";
import lounge from "../assets/rest-lounge.jpg";

const restaurants = [
  {
    name: "Aurora Rooftop",
    img: rooftop,
    rating: 4.8,
    tags: ["Continental", "Bar"],
    time: "30 min",
  },
  {
    name: "Trattoria Nove",
    img: italian,
    rating: 4.9,
    tags: ["Italian", "Wine"],
    time: "25 min",
  },
  {
    name: "Sakura Omakase",
    img: sushi,
    rating: 4.9,
    tags: ["Japanese", "Sushi"],
    time: "35 min",
  },
  {
    name: "Velvet Lounge",
    img: lounge,
    rating: 4.7,
    tags: ["Cocktails", "Lounge"],
    time: "40 min",
  },
];

export function Restaurants() {
  return (
    <section id="restaurants" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              02 — Trending
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Loved by the <span className="text-gradient italic">city.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Hand-curated picks from the most talked-about kitchens this week.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -12, rotateX: -4, rotateY: 4 }}
              style={{ transformPerspective: 1000 }}
              className="group glass-strong rounded-3xl overflow-hidden shadow-elegant"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 glass-strong rounded-full px-3 py-1 flex items-center gap-1 text-xs font-medium">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  {r.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gradient transition-all">
                  {r.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-white/10 pt-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {r.time}
                  </span>
                  <span className="text-primary font-medium">Order →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
