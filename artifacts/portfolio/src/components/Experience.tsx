import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './Editable';

const defaultExperience = [
  {
    role: "Diploma in Software Development",
    company: "IIE Rosebank College NMB Campus",
    period: "2026 - Current",
    desc: "Studying Software Development and building knowledge in programming fundamentals, Java, HTML, CSS, and responsive web development."
  },
  {
    role: "National Senior Certificate",
    company: "Hoerskool Strelitzia High School",
    period: "2021 - 2025",
    desc: "Completed secondary education before starting tertiary studies in Information Technology and Software Development."
  },
  {
    role: "Programming Training",
    company: "Self-study and College Practice",
    period: "Current",
    desc: "Learning beginner-friendly programming concepts with a focus on Java, HTML, CSS, and understanding how to write clear code."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Education Journey</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            <Editable>Education and Training</Editable>
          </h3>
        </motion.div>

        <div className="space-y-12">
          {defaultExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line (desktop) */}
              <div className="hidden md:block absolute left-[30%] top-0 bottom-[-3rem] w-px bg-border last:bottom-0" />
              
              <div className="md:grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 md:text-right relative">
                  {/* Timeline dot */}
                  <div className="absolute left-[-2rem] md:left-auto md:right-[-2.45rem] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary z-10" />
                  
                  <div className="text-lg font-bold text-foreground mb-1">
                    <Editable>{exp.period}</Editable>
                  </div>
                  <div className="text-primary font-medium">
                    <Editable>{exp.company}</Editable>
                  </div>
                </div>
                <div className="md:col-span-8 mt-2 md:mt-0">
                  <h4 className="text-2xl font-serif font-bold text-foreground mb-3">
                    <Editable>{exp.role}</Editable>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    <Editable>{exp.desc}</Editable>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
