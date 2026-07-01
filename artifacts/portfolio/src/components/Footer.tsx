import React from 'react';
import { Editable } from './Editable';
import { Github, Linkedin, Instagram, Facebook, WhatsApp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-muted-foreground text-sm font-medium">
          <Editable>Leletu Kamana</Editable> &copy; {currentYear}
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/l-kman-26-stack" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://github.com/leletu-kamana" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/leletu-kamana-1a22b8416" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/l_kman_26/#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.facebook.com/lelethu.kamana" className="text-muted-foreground hover:text-foreground transition-colors">
            <Facebook className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://wa.me/+27725813872" className="text-muted-foreground hover:text-foreground transition-colors">
            <WhatsApp className="w-5 h-5" />
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
