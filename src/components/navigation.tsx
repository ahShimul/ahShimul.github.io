'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abul_Hasnat_CV.pdf';
    link.download = 'Abul_Hasnat_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsOpen(false);

    // Small delay to allow menu animation to complete
    setTimeout(() => {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);

      if (element) {
        // Calculate offset for fixed header
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Update active section immediately
        setActiveSection(sectionId);
      }
    }, 100);
  };

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border/20'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className='flex-shrink-0'>
            <button
              onClick={() => scrollToSection('#home')}
              className='text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
            >
              Abul Hasnat
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId='activeSection'
                      className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-600'
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='sm'
              onClick={toggleTheme}
              className='p-2 relative overflow-hidden'
            >
              <AnimatePresence mode='wait'>
                {resolvedTheme === 'dark' ? (
                  <motion.div
                    key='sun'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className='h-4 w-4' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='moon'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className='h-4 w-4' />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='bg-primary text-primary-foreground border-0 hover:bg-primary/90'
              onClick={downloadCV}
            >
              <Download className='w-4 h-4 mr-2' />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            <Button
              variant='ghost'
              size='sm'
              onClick={toggleTheme}
              className='p-2 relative overflow-hidden'
            >
              <AnimatePresence mode='wait'>
                {resolvedTheme === 'dark' ? (
                  <motion.div
                    key='sun-mobile'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className='h-4 w-4' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='moon-mobile'
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className='h-4 w-4' />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 hover:bg-secondary/80'
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode='wait'>
                {isOpen ? (
                  <motion.div
                    key='close'
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className='h-5 w-5' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='menu'
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className='h-5 w-5' />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden bg-background/95 backdrop-blur-md border-t border-border/20 absolute top-full left-0 right-0 z-50 shadow-lg'
          >
            <div className='px-4 py-4 space-y-2 max-h-screen overflow-y-auto'>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-foreground/70 hover:text-primary hover:bg-secondary/80'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className='pt-4 border-t border-border/20'>
                <Button
                  variant='outline'
                  size='sm'
                  className='w-full bg-primary text-primary-foreground border-0 hover:bg-primary/90'
                  onClick={() => {
                    downloadCV();
                    setIsOpen(false);
                  }}
                >
                  <Download className='w-4 h-4 mr-2' />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
