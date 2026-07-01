import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Editable } from './Editable';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const roles = ["Software Development Student", "Aspiring Software Developer", "Java and Web Learner"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-20 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              <Editable>Leletu Kamana</Editable>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8"
          >
            <span>I am a</span>
            <div className="relative inline-block h-[1.2em] overflow-hidden min-w-[50ch]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "anticipate" }}
                  className="absolute left-0 whitespace-nowrap text-primary font-medium"
                >
                  <Editable>{`${roles[roleIndex]}`}</Editable>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12">
              <Editable>
                Information Technology undergraduate at IIE Rosebank College Nelson Mandela Bay, building a strong foundation in Java, HTML, CSS, and user-friendly web development.
              </Editable>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="rounded-full text-base px-8 h-14 bg-foreground text-background hover:bg-foreground/90 group" asChild>
              <a href="#work">
                <Editable>View My Work</Editable>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14 border-border hover:bg-muted" asChild>
              <a href="#contact">
                <Editable>Get In Touch</Editable>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
