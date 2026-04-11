import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2">Publications</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Research & writing.
          </h2>
        </motion.div>

        <motion.a
          href="https://doi.org/10.1007/978-981-97-1323-3_20"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 flex items-start gap-4 group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 block"
        >
          <div className="p-3 rounded-xl bg-accent/10 shrink-0">
            <BookOpen className="text-accent" size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
              A Survey of Automatic Number Plate Recognition and Parking Management System
              <ExternalLink size={16} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Smart Trends in Computing and Communications — SmartCom 2024
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Alekar, S., Kulkarni, Y., Gavhane, V., Jadhav, R., Lambhate, D., Kakade, M. · Springer, Vol. 946
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default PublicationsSection;