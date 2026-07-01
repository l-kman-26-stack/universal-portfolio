import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './Editable';
import { ArrowUpRight } from 'lucide-react';

const defaultProjects = [
  {
    title: "Responsive Portfolio Website",
    desc: "A personal portfolio website built to present my studies, skills, contact details, and Software Development journey.",
    tags: ["HTML", "CSS", "React", "Portfolio"],
    image: "blob:https://gemini.google.com/06b9154f-ef0a-4c6a-84a1-e95858da7720"
  },
  {
    title: "Java Practice Programs",
    desc: "Beginner programming exercises focused on variables, decisions, loops, methods, and clear problem-solving logic.",
    tags: ["Java", "Programming", "Problem Solving"],
    image: "blob:https://gemini.google.com/a7933cf4-6528-4447-b8ee-2e2dd46f2e78"
  },
  {
    title: "Research and Data Tasks",
    desc: "Academic work involving quantitative and qualitative research, data collection, and basic data analysis.",
    tags: ["Research", "Data Collection", "Analysis"],
    image: "https://picsum.photos/seed/research-task/800/600"
  }
];

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              <Editable>Student Projects and Practice</Editable>
            </h3>
          </motion.div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {defaultProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={`aspect-[4/3] rounded-2xl overflow-hidden bg-muted relative group ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className={`${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                <h4 className="text-3xl font-serif font-bold text-foreground mb-4">
                  <Editable>{project.title}</Editable>
                </h4>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  <Editable>{project.desc}</Editable>
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full text-xs font-medium bg-background border border-border text-foreground">
                      <Editable>{tag}</Editable>
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group">
                  <Editable>View Details</Editable>
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
