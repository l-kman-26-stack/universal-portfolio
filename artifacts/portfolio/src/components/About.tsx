9import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './Editable';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img 
                src="https://github.com/leletu-kamana/Leletu-Kamana-portfolio/assets/leletu-kamana.jpg" 
                alt="Profile of Leletu Kamana, a student software developer" 
                className="object-cover w-full h-full grayscale-[50%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm py-2 rounded-lg text-sm text-muted-foreground pointer-events-none">
                Leletu Kamana - Student Software Developer
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 -z-10" />
          </motion.div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">About Me</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                <Editable>
                  Growing as a software developer through practical learning and problem solving.
                </Editable>
              </h3>
              <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground mb-10">
                <p>
                  <Editable>
                    I am an Information Technology undergraduate at IIE Rosebank International UniversityCollege Nelson Mandela Bay Campus, currently studying toward a Diploma in Software Development. I am open-minded, practical, and interested in building responsive, user-friendly websites while improving my Java, HTML, and CSS skills.
                  </Editable>
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-border">
                {[
                  { value: "2026", label: "Diploma Started" },
                  { value: "3", label: "Core Coding Skills" },
                  { value: "2", label: "Spoken Languages" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-serif font-bold text-foreground mb-1">
                      <Editable>{stat.value}</Editable>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      <Editable>{stat.label}</Editable>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
