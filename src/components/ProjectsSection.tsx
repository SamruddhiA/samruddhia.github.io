import { motion } from "framer-motion";
import { Car, Database, Eye } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Things I've built.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 group hover:shadow-xl hover:shadow-accent/5 transition-shadow duration-500"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">
            Vehicle Detection & Parking Management System
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Developed a system to ensure security of vehicles in public parking lots and to check the availability of space beforehand to avoid chaos. The system incorporates several specialized algorithms, including “feature-based number plate localization” to locate the license plate, “image scissoring” for character segmentation, and statistical feature extraction for character recognition, all tailored to Indian number plates. 
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: Eye, label: "OpenCV" },
              { icon: Car, label: "ReactJS" },
              { icon: Database, label: "PostgreSQL" },
            ].map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent/10 text-accent"
              >
                <t.icon size={14} />
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;