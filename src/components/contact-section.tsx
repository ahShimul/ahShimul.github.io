'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Calendar,
  Globe,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useState, useTransition } from 'react';
import { sendEmail } from '@/lib/actions/email';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ah.shimul04@gmail.com',
    href: 'mailto:ah.shimul04@gmail.com',
    color: 'text-blue-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1705922300',
    href: 'tel:+8801705922300',
    color: 'text-green-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
    color: 'text-purple-600',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#',
    color: 'text-blue-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: '#',
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    icon: Globe,
    label: 'Portfolio',
    href: '#',
    color: 'text-purple-600',
  },
];

export function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] =
    useState<{
      type: 'success' | 'error';
      text: string;
    } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      setMessage(null);
      const result = await sendEmail(formData);

      setMessage({
        type: result.success ? 'success' : 'error',
        text: result.message,
      });

      // Clear message after 5 seconds
      setTimeout(() => setMessage(null), 5000);
    });
  };

  return (
    <section
      id='contact'
      className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-tl from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10' />
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl' />

      <div className='max-w-6xl mx-auto relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='text-center mb-16'
        >
          <motion.h2
            variants={itemVariants}
            className='text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-lg text-muted-foreground max-w-2xl mx-auto'
          >
            Ready to bring your next project to life? Let's discuss how I can
            help you build amazing serverless solutions.
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <Card className='p-8 border border-border/50 bg-card/80 backdrop-blur-sm'>
              <CardHeader className='p-0 mb-6'>
                <CardTitle className='text-2xl'>Get In Touch</CardTitle>
                <p className='text-muted-foreground'>
                  I'm always open to discussing new opportunities, interesting
                  projects, or potential collaborations.
                </p>
              </CardHeader>

              <CardContent className='p-0 space-y-6'>
                <div className='space-y-4'>
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className='flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group'
                    >
                      <div
                        className={`p-3 rounded-full bg-secondary group-hover:scale-110 transition-transform ${contact.color}`}
                      >
                        <contact.icon className='w-5 h-5' />
                      </div>
                      <div>
                        <p className='font-semibold'>{contact.label}</p>
                        <p className='text-muted-foreground'>{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className='pt-6 border-t'>
                  <h4 className='font-semibold mb-4'>Connect With Me</h4>
                  <div className='flex space-x-4'>
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className={`p-3 rounded-full bg-secondary hover:shadow-lg transition-all ${social.color}`}
                      >
                        <social.icon className='w-5 h-5' />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className='pt-6 border-t'>
                  <div className='flex items-center space-x-2 mb-2'>
                    <Calendar className='w-4 h-4 text-green-600' />
                    <span className='font-semibold'>Available for:</span>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      'Freelance Projects',
                      'Team Leadership',
                      'AWS Consulting',
                      'Code Reviews',
                    ].map((service) => (
                      <Badge key={service} variant='secondary'>
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className='p-8 border border-border/50 bg-card/80 backdrop-blur-sm'>
              <CardHeader className='p-0 mb-6'>
                <CardTitle className='text-2xl'>Send a Message</CardTitle>
                <p className='text-muted-foreground'>
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
              </CardHeader>

              <CardContent className='p-0'>
                <form action={handleSubmit} className='space-y-6'>
                  {message && (
                    <div
                      className={`p-4 rounded-lg flex items-center gap-2 ${
                        message.type === 'success'
                          ? 'bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-200'
                          : 'bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-200'
                      }`}
                    >
                      {message.type === 'success' ? (
                        <CheckCircle className='w-4 h-4' />
                      ) : (
                        <AlertCircle className='w-4 h-4' />
                      )}
                      {message.text}
                    </div>
                  )}

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium mb-2'
                      >
                        Name
                      </label>
                      <Input
                        id='name'
                        name='name'
                        placeholder='Your name'
                        required
                        className='border border-border/50 bg-background/50'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium mb-2'
                      >
                        Email
                      </label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='your.email@example.com'
                        required
                        className='border border-border/50 bg-background/50'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium mb-2'
                    >
                      Subject
                    </label>
                    <Input
                      id='subject'
                      name='subject'
                      placeholder="What's this about?"
                      required
                      className='border border-border/50 bg-background/50'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-2'
                    >
                      Message
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Tell me about your project or inquiry...'
                      rows={6}
                      required
                      className='border border-border/50 bg-background/50 resize-none'
                    />
                  </div>

                  <Button
                    type='submit'
                    size='lg'
                    className='w-full bg-primary hover:bg-primary/90'
                    disabled={isPending}
                  >
                    <Send className='w-4 h-4 mr-2' />
                    {isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                <div className='mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg'>
                  <p className='text-sm text-blue-800 dark:text-blue-200'>
                    <strong>Response Time:</strong> I typically respond within
                    24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
