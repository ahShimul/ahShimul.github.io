'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const experiences = [
  {
    id: 1,
    title: 'Software Engineering Team Lead',
    company: 'Craftsmen Software',
    location: 'Dhaka, Bangladesh',
    period: 'February 2023 - Present',
    type: 'Full-time',
    description:
      'Leading a team of developers in building serverless applications and cloud solutions. Responsible for architecture decisions, code reviews, and mentoring junior developers.',
    achievements: [
      'Led development of 5+ serverless applications using AWS Lambda and DynamoDB',
      'Reduced deployment time by 60% through CI/CD pipeline optimization',
      'Mentored 8 junior developers, improving team productivity by 40%',
      'Architected scalable solutions serving 100K+ users daily',
    ],
    technologies: [
      'AWS Lambda',
      'DynamoDB',
      'Node.js',
      'React',
      'TypeScript',
      'Docker',
      'Jenkins',
    ],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Craftsmen Software',
    location: 'Dhaka, Bangladesh',
    period: 'October 2021 - January 2023',
    type: 'Full-time',
    description:
      'Developed full-stack applications with focus on serverless architecture and cloud-native solutions. Collaborated with cross-functional teams to deliver high-quality software products.',
    achievements: [
      'Built and deployed 10+ serverless microservices using AWS Lambda',
      'Implemented automated testing reducing bugs by 45%',
      'Optimized database queries improving response time by 30%',
      'Contributed to system architecture design and technical documentation',
    ],
    technologies: [
      'AWS',
      'Lambda',
      'DynamoDB',
      'Vue.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Git',
    ],
  },
  {
    id: 3,
    title: 'Junior Software Engineer',
    company: 'Craftsmen Software',
    location: 'Dhaka, Bangladesh',
    period: 'June 2019 - September 2021',
    type: 'Full-time',
    description:
      'Started career as a junior developer, focusing on learning best practices and contributing to various web development projects. Gained experience in full-stack development and cloud technologies.',
    achievements: [
      'Developed responsive web applications using modern frameworks',
      'Participated in code reviews and learned industry best practices',
      'Collaborated with senior developers on complex features',
      'Successfully completed training on AWS cloud services',
    ],
    technologies: [
      'JavaScript',
      'HTML/CSS',
      'Node.js',
      'Express.js',
      'MySQL',
      'Git',
      'AWS Basics',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id='experience'
      className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-tr from-green-50/30 via-transparent to-blue-50/30 dark:from-green-950/10 dark:to-blue-950/10' />
      <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl' />
      <div className='absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl' />

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
            className='text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent'
          >
            Professional Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-lg text-muted-foreground max-w-2xl mx-auto'
          >
            My journey in software engineering and team leadership
          </motion.p>
        </motion.div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block' />

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className='space-y-12'
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className='relative md:ml-16'
              >
                {/* Timeline dot */}
                <div className='absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full border-4 border-background shadow-lg hidden md:block' />

                <Card className='hover:shadow-xl transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90'>
                  <CardHeader>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                      <div>
                        <CardTitle className='text-xl mb-1'>
                          {experience.title}
                        </CardTitle>
                        <p className='text-lg font-semibold text-primary'>
                          {experience.company}
                        </p>
                      </div>
                      <div className='flex flex-col sm:items-end gap-2'>
                        <Badge variant='secondary' className='w-fit'>
                          {experience.type}
                        </Badge>
                        <div className='flex items-center text-sm text-muted-foreground'>
                          <Calendar className='w-4 h-4 mr-1' />
                          {experience.period}
                        </div>
                        <div className='flex items-center text-sm text-muted-foreground'>
                          <MapPin className='w-4 h-4 mr-1' />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    <p className='text-muted-foreground mt-4 leading-relaxed'>
                      {experience.description}
                    </p>
                  </CardHeader>

                  <CardContent className='space-y-6'>
                    <div>
                      <h4 className='font-semibold mb-3 flex items-center'>
                        <TrendingUp className='w-4 h-4 mr-2 text-primary' />
                        Key Achievements
                      </h4>
                      <ul className='space-y-2'>
                        {experience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className='flex items-start text-sm text-muted-foreground'
                          >
                            <span className='w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0' />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-semibold mb-3 text-sm'>
                        Technologies Used
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant='outline'
                            className='text-xs border-border/50 hover:bg-secondary/60'
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className='mt-16 text-center'
        >
          <Card className='inline-block p-6 bg-card/80 border border-border/50 backdrop-blur-sm'>
            <div className='flex items-center justify-center space-x-8 text-center'>
              <div>
                <p className='text-2xl font-bold text-primary'>5+</p>
                <p className='text-sm text-muted-foreground'>
                  Years Experience
                </p>
              </div>
              <div className='w-px h-12 bg-border' />
              <div>
                <p className='text-2xl font-bold text-primary'>15+</p>
                <p className='text-sm text-muted-foreground'>
                  Projects Completed
                </p>
              </div>
              <div className='w-px h-12 bg-border' />
              <div>
                <p className='text-2xl font-bold text-primary'>8</p>
                <p className='text-sm text-muted-foreground'>
                  Team Members Led
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
