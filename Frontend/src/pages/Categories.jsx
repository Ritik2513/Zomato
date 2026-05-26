import { motion } from "framer-motion";
import { Bike, UtensilsCrossed, Wine, Coffee } from "lucide-react";

import rooftop from "../assets/rest-rooftop.jpg";
import italian from "../assets/rest-italian.jpg";
import sushi from "../assets/rest-sushi.jpg";
import lounge from "../assets/rest-lounge.jpg";

const categories = [
  {
    icon: Bike,
    title: "Delivery",
    desc: "Hot meals at your door",
    img: italian,
  },
  {
    icon: UtensilsCrossed,
    title: "Delivery",
    desc: "Reserve unforgettable evenings",
    img: rooftop,
  },
  {
    icon: Wine,
    title: "Nightlife",
    desc: "Bars, lounges & rooftops",
    img: lounge,
  },
  {
    icon: Coffee,
    title: "Cafes",
    desc: "Slow mornings, great brews",
    img: sushi,
  },
];

export function Categories() {
  return (
    <section id="categories" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            01 — Explore
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Every craving has a{" "}
            <span className="text-gradient italic">moment.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-105 rounded-3xl overflow-hidden cursor-pointer shadow-elegant"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-700"></div>

                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="glass rounded-2xl p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-display text-2xl font-semibold mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
