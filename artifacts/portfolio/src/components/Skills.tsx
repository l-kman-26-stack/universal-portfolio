import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './Editable';
import { Code2, PenTool, Lightbulb, Search, MessageSquare, Briefcase } from 'lucide-react';

const defaultSkills = [
  {
    icon: Code2,
    title: "Java Programming",
    desc: "Building a beginner-friendly foundation in writing and understanding Java code."
  },
  {
    icon: PenTool,
    title: "HTML and CSS",
    desc: "Creating simple, responsive, and visually appealing web pages using core web technologies."
  },
  {
    icon: Lightbulb,
    title: "Microsoft Office",
    desc: "Moderate experience using Microsoft Word and Excel for academic and practical tasks."
  },
  {
    icon: Search,
    title: "Research Skills",
    desc: "Experience with quantitative and qualitative research, data collection, and data analysis."
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Able to communicate in English at an intermediate level and IsiXhosa conversationally."
  },
  {
    icon: Briefcase,
    title: "Problem Solving",
    desc: "Open-minded and practical when learning new concepts and solving software development tasks."
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Core Competencies</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              <Editable>Skills and Abilities</Editable>
            </h3>
            <p className="text-lg text-muted-foreground">
              <Editable>A growing set of technical, communication, and research skills developed through my Software Development studies.</Editable>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-card-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <skill.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                <Editable>{skill.title}</Editable>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                <Editable>{skill.desc}</Editable>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
