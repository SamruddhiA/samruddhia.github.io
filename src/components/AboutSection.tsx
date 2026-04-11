import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-12"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-accent/20 shadow-lg">
            <img src={headshot} alt="Samruddhi Alekar" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Turning complex problems into elegant solutions.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Technology associate with proven efficiency in fast-paced environments. I demonstrate strong ability to learn quickly and apply new knowledge effectively. Skilled in adapting to challenging situations and delivering results through clean, maintainable code.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10">
              <GraduationCap className="text-accent" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Pune Institute Of Computer Technology
              </h3>
              <p className="text-muted-foreground mt-1">
                B.E. — Electronics and Telecommunications
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin size={14} /> Pune</span>
                <span>Jun 2024</span>
                <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold text-xs">
                  CGPA: 9.01
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Relevant Coursework:</span>{" "}
                Data Structures & Algorithms, Object Oriented Programming, Database Management
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Languages:</span>{" "}
                JavaScript, TypeScript, C++, Python
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Extracurricular:</span>{" "}
                Head of Design, PICT NSS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;