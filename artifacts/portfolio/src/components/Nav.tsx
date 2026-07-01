import React, { useState, useEffect } from 'react';
import { Editable } from './Editable';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Edit2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEditMode } from '@/lib/edit-mode';

export function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isEditMode, toggleEditMode } = useEditMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter">
          <Editable as="span">[LK]</Editable>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleEditMode}
            className={`rounded-full ${isEditMode ? 'bg-primary/20 text-primary' : 'text-muted-foreground'}`}
            title="Toggle Edit Mode"
          >
            <Edit2 className="h-4 w-4" />
            <span className="sr-only">[Toggle Edit Mode]</span>
          </Button>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-muted-foreground"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">[Toggle theme]</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
