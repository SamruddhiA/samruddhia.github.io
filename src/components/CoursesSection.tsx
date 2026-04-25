import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

type Course = {
  title: string;
  provider: string;
  url: string; // Public certificate URL (e.g., https://www.udemy.com/certificate/UC-xxxxxxxx/)
};

const courses: Course[] = [
  {
    title: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-b1202251-7c5b-42d9-bc66-f73c8dd73dfa/",
  },
  {
    title: "Modern JavaScript From The Beginning 2.0",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-bc461570-3912-451c-9451-3dec31898388/",
  },
  {
    title: "Understanding TypeScript",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-82189af0-4f1f-4b4b-a03e-ec74cf6b0ddb/",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2">
            Courses & Certifications
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Always learning, always building.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Click any course to view the certificate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course, idx) => (
            <motion.a
              key={course.title}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                  <BookOpen size={20} />
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{course.provider}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;