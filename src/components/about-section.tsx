'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

export function AboutSection() {
  return (
    <section
      id='about'
      className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10' />
      <div className='absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl' />

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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-lg text-muted-foreground max-w-2xl mx-auto'
          >
            Passionate leader with expertise in serverless technologies and team
            management
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className='p-8'>
              <CardContent className='space-y-6'>
                <div>
                  <h3 className='text-2xl font-semibold mb-4'>
                    Software Engineering Team Lead
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    I’m a Software Engineering Team Lead who’s been building
                    software and leading brilliant teams for over 5 years. I
                    design scalable architectures, guide projects from idea to
                    launch, and make sure the final product not only works — but
                    works beautifully. And yes, I’ve even convinced the cloud to
                    behave… most of the time.
                  </p>
                </div>

                <div>
                  <h4 className='text-lg font-semibold mb-3'>What I Do</h4>
                  <ul className='space-y-2 text-muted-foreground'>
                    <li>
                      🔧 Full Stack Development (Node.js, React, Vue.js,
                      Nest.js)
                    </li>
                    <li>
                      ☁️ AWS Serverless Applications (Lambda, DynamoDB, S3)
                    </li>
                    <li>👥 Team Leadership & Project Management</li>
                    <li>🏗️ Scalable Architecture Design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <Card className='p-6'>
              <h4 className='text-lg font-semibold mb-4'>Quick Facts</h4>
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div>
                  <p className='text-muted-foreground'>Experience</p>
                  <p className='font-semibold'>5+ Years</p>
                </div>
                <div>
                  <p className='text-muted-foreground'>Location</p>
                  <p className='font-semibold'>Dhaka, Bangladesh</p>
                </div>
                <div>
                  <p className='text-muted-foreground'>Role</p>
                  <p className='font-semibold'>Team Lead</p>
                </div>
                <div>
                  <p className='text-muted-foreground'>Focus</p>
                  <p className='font-semibold'>Full Stack Development</p>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <h4 className='text-lg font-semibold mb-4'>Current Focus</h4>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Full Stack Development',
                  'Performance Optimization',
                  'Scalability',
                  'Real-time Data Processing',
                  'LLM Applications',
                  'Serverless Architecture',
                  'Team Leadership',
                  'CI/CD Pipelines',
                ].map((tech) => (
                  <Badge key={tech} variant='secondary'>
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className='p-6'>
              <h4 className='text-lg font-semibold mb-4'>Education</h4>
              <div>
                <p className='font-semibold'>
                  BSc: Computer Science & Engineering
                </p>
                <p className='text-muted-foreground'>
                  Rajshahi University of Engineering & Technology
                </p>
                <p className='text-sm text-muted-foreground'>2014 - 2018</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
