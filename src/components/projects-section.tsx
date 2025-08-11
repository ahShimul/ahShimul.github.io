'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

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

const projects = [
  {
    id: 1,
    title: 'Tax Transcript Pro',
    description:
      'A comprehensive solution for tax transcript retrieval and management, leveraging serverless architecture for scalability and performance.',
    technologies: [
      'AWS Lambda',
      'DynamoDB',
      'Vue',
      'Java Spring Boot',
      'Stripe API',
      'GitHub Actions',
    ],
    category: 'Full Stack',
    status: 'Production',
    features: [
      'Real-time transcript tracking',
      'Automated payment processing',
      'Serverless microservices architecture',
      'Admin dashboard with analytics',
    ],
    link: 'https://taxtranscriptpro.com',
  },
  {
    id: 2,
    title: 'Tax On Track',
    description:
      'A serverless application for tracking tax documents and deadlines, built with AWS CDK and TypeScript.',
    technologies: ['AWS CDK', 'TypeScript', 'React.js'],
    category: 'Full Stack',
    status: 'Active Development',
    features: [
      'Automated tracking',
      'Infrastructure monitoring',
      'Cost optimization alerts',
      'Multi-environment deployment',
    ],
    link: 'https://www.taxontrack.us',
  }
];

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 bg-gradient-to-bl from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-950/10 dark:to-blue-950/10' />
      <div className='absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl' />

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='text-center mb-16'
        >
          <motion.h2
            variants={itemVariants}
            className='text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-lg text-muted-foreground max-w-2xl mx-auto'
          >
            A showcase of my expertise in serverless architecture and full-stack
            development
          </motion.p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='grid lg:grid-cols-2 gap-8'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className='h-full hover:shadow-xl transition-shadow duration-300 border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90'>
                <CardHeader>
                  <div className='flex justify-between items-start mb-2'>
                    <Badge
                      variant={
                        project.status === 'Production'
                          ? 'default'
                          : 'secondary'
                      }
                    >
                      {project.status}
                    </Badge>
                    <Badge variant='outline'>{project.category}</Badge>
                  </div>
                  <CardTitle className='text-xl mb-2'>
                    {project.title}
                  </CardTitle>
                  <p className='text-muted-foreground text-sm leading-relaxed'>
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className='space-y-6'>
                  <div>
                    <h4 className='font-semibold mb-2 text-sm'>Key Features</h4>
                    <ul className='text-sm text-muted-foreground space-y-1'>
                      {project.features.map((feature, idx) => (
                        <li key={idx} className='flex items-center'>
                          <span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-semibold mb-3 text-sm'>Technologies</h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='text-xs bg-secondary/60 hover:bg-primary/10 hover:text-primary border border-border/30'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className='flex gap-3 pt-4'>
                    <a
                      target='_blank'
                      href={project.link}
                      className='flex-1 bg-primary hover:bg-primary/90 flex items-center justify-center py-2 rounded-md'
                    >
                      <ExternalLink className='w-4 h-4 mr-2' />
                      Visit Site
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className='text-center mt-12'
        >
          <Button
            variant='outline'
            size='lg'
            className='border-border/50 hover:bg-secondary/80'
          >
            View All Projects
            <ExternalLink className='w-4 h-4 ml-2' />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
