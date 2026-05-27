import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
    >
      <div className="glass-strong mx-auto max-w-7xl rounded-2xl px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-gradient">
            zomato
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
            / premium
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a
            href="#discover"
            className="hover:text-foreground transition-colors"
          >
            Discover
          </a>
          <a
            href="#categories"
            className="hover:text-foreground transition-colors"
          >
            Categories
          </a>
          <a
            href="#restaurants"
            className="hover:text-foreground transition-colors"
          >
            Restaurants
          </a>
          <a
            href="#collections"
            className="hover:text-foreground transition-colors"
          >
            Collections
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full hover:bg-white/5 transition"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <a 
          href="https://play.google.com/store/apps/details?id=com.application.zomato"
          target="_blank"
          className="bg-gradient-primary text-primary-foreground text-sm px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform">
            Sign in
          </a>
        </div>
      </div>
    </motion.header>
  );
}
