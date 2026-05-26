import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import Qr from "../assets/qr.avif";

export function DownloadApp() {
  return (
    <section id="download" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong relative rounded-[2.5rem] overflow-hidden shadow-elegant"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.62_0.22_22/0.25),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.72_0.24_28/0.2),transparent_55%)]" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-12 p-10 md:p-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
                Mobile experience
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02]">
                Download the <br />
                <span className="text-gradient italic">app now.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-md">
                Experience seamless online ordering — only on the Zomato app.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl px-6 py-3 flex items-center gap-3 hover:bg-white/10 transition border border-white/10"
                >
                  <Apple className="w-7 h-7" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Download on the
                    </p>
                    <p className="font-display text-lg font-semibold">
                      App Store
                    </p>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.application.zomato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl px-6 py-3 flex items-center gap-3 hover:bg-white/10 transition border border-white/10"
                >
                  <Play className="w-7 h-7 fill-current" />
                  <div className="text-left leading-tight">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Get it on
                    </p>
                    <p className="font-display text-lg font-semibold">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="relative bg-white rounded-3xl p-5 shadow-elegant">
                <img src={Qr} alt="QR Code" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">
                Scan to download
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
