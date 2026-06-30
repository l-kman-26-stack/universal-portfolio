import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './Editable';

const defaultExperience = [
  {
    role: "Senior Lead Developer",
    company: "TechNova Solutions",
    period: "2020 – Present",
    desc: "Spearheaded the transition to a modern frontend stack, reducing load times by 60%. Managed a team of 8 engineers and established firm-wide coding standards."
  },
  {
    role: "Product Designer",
    company: "Creative Studio X",
    period: "2017 – 2020",
    desc: "Led end-to-end design for 5 major client applications. Increased user retention by 35% through iterative usability testing and data-driven refinements."
  },
  {
    role: "Software Engineer",
    company: "Startup Inc",
    period: "2014 – 2017",
    desc: "Developed core features for the flagship product from MVP to Series B. Built robust APIs and scalable database schemas serving thousands of daily active users."
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
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Career Journey</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            <Editable>[Professional Experience]</Editable>
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
                    <Editable>[{exp.period}]</Editable>
                  </div>
                  <div className="text-primary font-medium">
                    <Editable>[{exp.company}]</Editable>
                  </div>
                </div>
                <div className="md:col-span-8 mt-2 md:mt-0">
                  <h4 className="text-2xl font-serif font-bold text-foreground mb-3">
                    <Editable>[{exp.role}]</Editable>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    <Editable>[{exp.desc}]</Editable>
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
