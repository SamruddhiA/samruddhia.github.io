import { motion } from "framer-motion";

const skills = [
  { name: "ReactJS", category: "tech" },
  { name: "TypeScript", category: "tech" },
  { name: "JavaScript", category: "tech" },
  { name: "Web Development", category: "tech" },
  { name: "C++", category: "tech" },
  { name: "Python", category: "tech" },
  { name: "PostgreSQL", category: "tech" },
  { name: "Version Control", category: "tech" },
  { name: "Prompt Engineering", category: "tech" },
  { name: "Problem Solving", category: "soft" },
  { name: "Analytical Thinking", category: "soft" },
  { name: "Adaptive Thinking", category: "soft" },
  { name: "Team Collaboration", category: "soft" },
  { name: "Effective Communication", category: "soft" },
  { name: "Technical Documentation", category: "soft" },
];

const SkillsSection = () => {
  const techSkills = skills.filter((s) => s.category === "tech");
  const softSkills = skills.filter((s) => s.category === "soft");

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            My toolkit & strengths.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-5">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((s, i) => (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-5">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s, i) => (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-primary/5 text-foreground border border-border hover:bg-primary/10 transition-colors cursor-default"
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;