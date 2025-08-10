'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Globe,
  Download,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
    color: 'hover:text-gray-800 dark:hover:text-gray-200',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    href: 'mailto:ah.shimul04@gmail.com',
    icon: Mail,
    color: 'hover:text-green-600',
  },
  {
    name: 'Portfolio',
    href: '#',
    icon: Globe,
    color: 'hover:text-purple-600',
  },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const technologies = [
  'AWS Lambda',
  'Node.js',
  'React',
  'TypeScript',
  'DynamoDB',
  'Next.js',
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-black/20' />
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl' />

      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='lg:col-span-2'
            >
              <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                Abul Hasnat
              </h3>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                Software Engineering Team Lead passionate about serverless
                technologies and building scalable cloud solutions. Leading
                teams to deliver high-quality software that makes a difference.
              </p>

              <div className='flex flex-wrap gap-2 mb-6'>
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant='secondary'
                    className='bg-white/10 text-white border-white/20 hover:bg-white/20'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className='flex space-x-4'>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/10 rounded-full transition-colors ${social.color}`}
                  >
                    <social.icon className='w-5 h-5' />
                    <span className='sr-only'>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className='text-gray-300 hover:text-white transition-colors hover:underline'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className='text-lg font-semibold mb-4'>Get In Touch</h4>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <Mail className='w-4 h-4 text-blue-400' />
                  <a
                    href='mailto:ah.shimul04@gmail.com'
                    className='text-gray-300 hover:text-white transition-colors text-sm'
                  >
                    ah.shimul04@gmail.com
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <Phone className='w-4 h-4 text-green-400' />
                  <a
                    href='tel:+8801705922300'
                    className='text-gray-300 hover:text-white transition-colors text-sm'
                  >
                    +880 1705922300
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <MapPin className='w-4 h-4 text-purple-400' />
                  <span className='text-gray-300 text-sm'>
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>

              <div className='mt-6'>
                <Button
                  variant='outline'
                  className='bg-transparent border-white/30 text-white hover:bg-white/10'
                >
                  <Download className='w-4 h-4 mr-2' />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='flex items-center space-x-2 text-gray-300 text-sm'
              >
                <span>© 2025 Abul Hasnat. Made with</span>
                <Heart className='w-4 h-4 text-red-400' />
                <span>using Next.js & Tailwind CSS</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='flex items-center space-x-4'
              >
                <div className='flex items-center space-x-2 text-gray-400 text-sm'>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                  <span>Available for freelance</span>
                </div>

                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors'
                >
                  <ArrowUp className='w-4 h-4' />
                  <span className='sr-only'>Back to top</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
