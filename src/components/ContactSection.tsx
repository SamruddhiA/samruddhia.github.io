import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "alekar.samruddhi@gmail.com",
    href: "mailto:alekar.samruddhi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 84089-25753",
    href: "tel:+918408925753",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "samruddhi-alekar",
    href: "https://linkedin.com/in/samruddhi-alekar/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's connect.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "LinkedIn" ? "_blank" : undefined}
              rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <c.icon className="text-accent" size={22} />
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
              <p className="text-sm font-medium text-foreground">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;