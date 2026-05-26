import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const columns = [
  {
    title: "Eternal",
    links: [
      { label: "Zomato", path: "https://www.zomato.com/" },
      { label: "Blinkit", path: "https://blinkit.com/" },
      { label: "District", path: "https://www.district.in/" },
      { label: "Hyperpure", path: "https://www.hyperpure.com/" },
      { label: "Feeding India", path: "https://www.feedingindia.org/" },
      {
        label: "Investor Relations",
        path: "https://www.eternal.com/investor-relations/",
      },
    ],
  },
  {
    title: "Learn More",
    links: [
      { label: "Privacy", path: "https://www.zomato.com/policies/privacy/" },
      { label: "Security", path: "https://www.zomato.com/policies/security/" },
      {
        label: "Terms of Service",
        path: "https://www.zomato.com/policies/terms-of-service/",
      },
      { label: "Help & Support", path: "https://www.zomato.com/contact" },
      { label: "Blog", path: "https://www.zomato.com/blog/" },
    ],
  },
  {
    title: "For Delivery Partners",
    links: [
      {
        label: "Partner with us",
        path: "https://www.zomato.com/deliver-food/",
      },
      {
        label: "Apps for you",
        path: "https://play.google.com/store/apps/details?id=com.zomato.delivery&hl=en_IN&gl=US",
      },
    ],
  },
];

const social = [
  {
    Icon: FaLinkedin,
    path: "https://www.linkedin.com/company/zomato?originalSubdomain=in",
  },
  {
    Icon: FaInstagram,
    path: "https://www.instagram.com/zomato/",
  },
  {
    Icon: FaFacebookF,
    path: "https://www.facebook.com/zomato",
  },
  {
    Icon: FaXTwitter,
    path: "https://x.com/zomato",
  },
  {
    Icon: FaYoutube,
    path: "https://www.youtube.com/zomato",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="relative pt-24 pb-10 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_2fr] gap-12 mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                The Zomato Story
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Bringing the world's best food{" "}
                <span className="italic text-gradient">to your table.</span>
              </h3>
              <p className="mt-6 text-sm text-muted-foreground max-w-md leading-relaxed">
                From neighbourhood gems to Michelin-starred kitchens, we connect
                you with the meals that make life unforgettable.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                    {col.title}
                  </h4>

                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.path}
                          target="_blank"
                          className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Giant word mark */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative select-none"
            aria-hidden
          >
            <h2
              className="font-display font-black text-center leading-[0.85] tracking-[-0.04em] text-transparent bg-clip-text"
              style={{
                fontSize: "clamp(5rem, 19vw, 22rem)",
                backgroundImage:
                  "linear-gradient(180deg, oklch(0.62 0.22 22), oklch(0.32 0.12 22 / 0.4))",
              }}
            >
              ZOMATO
            </h2>
          </motion.div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Zomato Premium · Crafted with
              cinematic care.
            </p>
            <div className="flex items-center gap-4">
              {social.map((item, i) => {
                const Icon = item.Icon;

                return (
                  <a
                    key={i}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Social link"
                    className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <div className="flex items-center gap-5 text-xs text-muted-foreground">
              <a
                href="https://www.zomato.com/policies/privacy/"
                target="_blank"
                className="hover:text-foreground transition"
              >
                Privacy
              </a>
              <a
                href="https://www.zomato.com/policies/terms-of-service/"
                className="hover:text-foreground transition"
                target="_blank"
              >
                Terms
              </a>
              <a
                href="https://www.zomato.com/blog/"
                target="_blank"
                className="hover:text-foreground transition"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
