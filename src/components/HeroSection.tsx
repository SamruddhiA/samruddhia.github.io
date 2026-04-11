import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_60%_12%/0.85)] via-[hsl(220_45%_18%/0.8)] to-[hsl(220_60%_12%/0.95)]" />

      <div className="relative z-10 text-center px-6 max-w-3xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          style={{ color: "hsl(38 90% 55%)" }}
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ color: "hsl(220 15% 95%)" }}
        >
          Samruddhi
          <br />
          <span className="text-gradient">Alekar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsl(220 15% 70%)" }}
        >
          Technology associate building impactful frontend solutions with ReactJS & TypeScript at ZS Associates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm bg-accent text-accent-foreground hover:brightness-110 transition-all shadow-lg shadow-accent/20"
          >
            <Mail size={16} /> Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/samruddhi-alekar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm border border-[hsl(220_15%_40%)] hover:border-accent/50 transition-colors"
            style={{ color: "hsl(220 15% 80%)" }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ color: "hsl(220 15% 50%)" }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;