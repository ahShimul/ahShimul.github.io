'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const TypewriterText = ({
  texts,
  speed = 150,
}: {
  texts: string[];
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentIndex];

      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, speed]);

  return (
    <span className='text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text'>
      {displayText}
      <span className='animate-pulse'>|</span>
    </span>
  );
};

const FloatingElements = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20'
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rotate-45 opacity-20'
        animate={{
          y: [0, 25, 0],
          rotate: [45, 90, 45],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20'
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* SVG Wave Animation */}
      <svg
        className='absolute bottom-0 left-0 w-full h-32 opacity-10'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <motion.path
          d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
          fill='currentColor'
          className='text-primary/20'
          animate={{
            d: [
              'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z',
              'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z',
              'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abul_Hasnat_CV.pdf'; // Make sure to place your CV PDF in the public folder as 'cv.pdf'
    link.download = 'Abul_Hasnat_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const typewriterTexts = [
    'Software Engineering Team Lead',
    'Serverless Computing Expert',
    'AWS Solutions Architect',
    'Full Stack Developer',
  ];

  return (
    <section className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden'>
      <FloatingElements />

      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5' />

      <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10'>
        {/* Left side - Text content */}
        <div className='text-center lg:text-left order-2 lg:order-1'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant='secondary'
              className='mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20'
            >
              <Sparkles className='w-3 h-3 mr-1' />
              Welcome to my portfolio
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight'
          >
            Hi, I&rsquo;m{' '}
            <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap'>
              Abul Hasnat
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-16'
          >
            <TypewriterText texts={typewriterTexts} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl lg:max-w-none leading-relaxed'
          >
            I lead teams that turn{' '}
            <em className='font-semibold not-italic'>
              big ideas into software people actually want to use
            </em>{' '}
            — not just tolerate.
            <br />
            With years of experience in building everything from{' '}
            <strong className='font-medium'>snappy frontends</strong> to{' '}
            <strong className='font-medium'>rock-solid backends</strong>, I make
            products that are{' '}
            <em className='font-semibold not-italic'>
              fast, intuitive, and secretly complex under the hood
            </em>
            .
            <br />
            My goal?{' '}
            <strong className='font-bold tracking-wide'>
              To ship software that works so well, you&rsquo;ll forget how much
              work went into it
            </strong>
            … and that&rsquo;s exactly how it should be.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8'
          >
            <Button
              size='lg'
              className='text-lg px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'
              onClick={() =>
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View My Work
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='text-lg px-8 border-primary/30 hover:bg-primary/10 transition-all duration-300'
              onClick={downloadCV}
            >
              <Download className='w-4 h-4 mr-2' />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='flex justify-center lg:justify-start space-x-4'
          >
            {[
              {
                Icon: Github,
                href: 'https://github.com/ahshimul',
                label: 'GitHub',
                color: 'from-gray-600 to-gray-800',
              },
              {
                Icon: Linkedin,
                href: 'https://www.linkedin.com/in/a-hasnat-shimul',
                label: 'LinkedIn',
                color: 'from-blue-500 to-blue-700',
              },
              {
                Icon: Mail,
                href: 'mailto:ah.shimul04@gmail.com',
                label: 'Email',
                color: 'from-green-500 to-green-700',
              },
            ].map(({ Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full bg-gradient-to-r ${color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <Icon className='h-5 w-5' />
                <span className='sr-only'>{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='order-1 lg:order-2 flex justify-center'
        >
          <div className='relative'>
            {/* Animated background rings */}
            <motion.div
              className='absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ scale: 1.2 }}
            />
            <motion.div
              className='absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20'
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ scale: 1.1 }}
            />

            {/* Profile image */}
            <div className='relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10'>
              <Image
                src='/66.png'
                alt='Abul Hasnat - Profile Picture'
                fill
                className='object-cover object-center'
                priority
              />
            </div>

            {/* Floating particles around image */}
            <div className='absolute inset-0'>
              {[
                'particle-1',
                'particle-2',
                'particle-3',
                'particle-4',
                'particle-5',
                'particle-6',
              ].map((id, i) => (
                <motion.div
                  key={id}
                  className='absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full'
                  style={{
                    top: `${20 + ((i * 60) % 80)}%`,
                    left: `${10 + ((i * 70) % 80)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <Button
          variant='ghost'
          size='icon'
          onClick={scrollToAbout}
          className='animate-bounce hover:bg-primary/10 transition-all duration-300'
        >
          <ArrowDown className='h-5 w-5' />
        </Button>
      </motion.div>
    </section>
  );
}
