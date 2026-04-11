import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const bullets = [
  "Led requirement-gathering sessions with clients to clarify business problems and deliver effective solutions.",
  "Developed technical solutions that addressed specific business challenges and streamlined client processes.",
  "Created frontend applications using ReactJS and TypeScript to enhance supply chain and manufacturing capabilities.",
  "Cultivated relationships with key stakeholders to enhance communication and collaboration across teams and clients.",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Where I've made an impact.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Accent bar */}
          <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl" />

          <div className="flex items-start gap-4 ml-4">
            <div className="p-3 rounded-xl bg-accent/10 shrink-0">
              <Briefcase className="text-accent" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold text-foreground">
                ZS Associates
              </h3>
              <p className="text-accent font-medium text-sm mt-1">
                Business Solutions Technology Associate
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Jul 2020 — Present · Pune, India
              </p>

              <ul className="mt-6 space-y-3">
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;