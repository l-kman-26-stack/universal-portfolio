import React from 'react';
import { motion } from 'framer-motion';
import { Editable } from './Editable';
import { Quote } from 'lucide-react';

const defaultTestimonials = [
  {
    quote: "Academic reference from IIE Rosebank International Nelson Mandela Bay.",
    name: "Professor A Phewa",
    title: "Lecturer",
    company: "IIE Rosebank International NMB"
  },
  {
    quote: "Academic reference from IIE Rosebank International Nelson Mandela Bay.",
    name: "Professor M Mbongwe",
    title: "Lecturer",
    company: "IIE Rosebank International NMB"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Background pattern/noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {defaultTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <Quote className="w-12 h-12 text-primary-foreground/20 mb-6" />
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                "<Editable>[{testimonial.quote}]</Editable>"
              </p>
              <div>
                <div className="font-bold text-lg">
                  <Editable>[{testimonial.name}]</Editable>
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  <Editable>[{testimonial.title}, {testimonial.company}]</Editable>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
