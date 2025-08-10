'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiServerless,
  SiAmazondynamodb,
  SiAmazonecs,
  SiExpress,
  SiTestinglibrary,
} from 'react-icons/si';
import {
  Database,
  Users,
  Target,
  GitBranch,
  MessageSquare,
  Layers,
  Settings,
  TrendingUp,
  Monitor,
  Smartphone,
} from 'lucide-react';

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Nest.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-green-500' },
      { name: 'Java Spring Boot', icon: FaJava, color: 'text-green-500' },
      { name: 'AWS Lambda', icon: FaAws, color: 'text-orange-500' },
      {
        name: 'Serverless Computing',
        icon: SiServerless,
        color: 'text-purple-500',
      },
      { name: 'AWS S3', icon: FaAws, color: 'text-orange-500' },
      {
        name: 'Amazon DynamoDB',
        icon: SiAmazondynamodb,
        color: 'text-blue-600',
      },
      { name: 'RESTful APIs', icon: Database, color: 'text-blue-500' },
      { name: 'Microservices', icon: Layers, color: 'text-indigo-500' },
      { name: 'AWS ECS', icon: SiAmazonecs, color: 'text-orange-600' },
    ],
    color: 'from-blue-500 to-cyan-500',
    tabIcon: Database,
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
      { name: 'Vue.js', icon: FaVuejs, color: 'text-green-500' },
      { name: 'Next.js', icon: FaReact, color: 'text-blue-400' },
      { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-500' },
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'Responsive Design', icon: Smartphone, color: 'text-purple-500' },
      { name: 'UI/UX Implementation', icon: Monitor, color: 'text-pink-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    ],
    color: 'from-green-500 to-emerald-500',
    tabIcon: Monitor,
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'CI/CD Pipelines', icon: GitBranch, color: 'text-green-500' },
      { name: 'Version Control', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'Containerization', icon: FaDocker, color: 'text-blue-400' },
      {
        name: 'Performance Optimization',
        icon: TrendingUp,
        color: 'text-purple-500',
      },
      {
        name: 'Test-driven Development',
        icon: SiTestinglibrary,
        color: 'text-red-500',
      },
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
      { name: 'AWS Services', icon: FaAws, color: 'text-orange-500' },
    ],
    color: 'from-purple-500 to-violet-500',
    tabIcon: Settings,
  },
  {
    id: 'leadership',
    title: 'Leadership & Process',
    skills: [
      { name: 'Team Leadership', icon: Users, color: 'text-blue-500' },
      { name: 'Agile Methodologies', icon: Target, color: 'text-green-500' },
      { name: 'Project Management', icon: Layers, color: 'text-purple-500' },
      { name: 'Code Reviews', icon: GitBranch, color: 'text-orange-500' },
      { name: 'SDLC Management', icon: Settings, color: 'text-indigo-500' },
      {
        name: 'Client Communication',
        icon: MessageSquare,
        color: 'text-pink-500',
      },
      { name: 'Software Architecture', icon: Layers, color: 'text-cyan-500' },
      { name: 'Design Patterns', icon: Target, color: 'text-red-500' },
    ],
    color: 'from-orange-500 to-red-500',
    tabIcon: Users,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section
      id='skills'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-purple-50/50 dark:from-green-950/10 dark:via-blue-950/10 dark:to-purple-950/10 relative overflow-hidden'
    >
      {/* Animated background elements */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse' />
        <div
          className='absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse'
          style={{ animationDelay: '1s' }}
        />
      </div>

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
            Skills & Technologies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-lg text-muted-foreground max-w-2xl mx-auto'
          >
            A comprehensive toolkit for building modern serverless applications
            and leading development teams
          </motion.p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Tabs defaultValue='backend' className='w-full'>
            <TabsList className='grid w-full grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm'>
              {skillCategories.map((category) => {
                const TabIcon = category.tabIcon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className='flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
                  >
                    <TabIcon className='w-4 h-4' />
                    <span className='hidden sm:inline'>{category.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {skillCategories.map((category, categoryIndex) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className='border border-border/50 bg-card/80 backdrop-blur-sm'>
                    <CardContent className='p-8'>
                      <div className='mb-6'>
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center shadow-lg mx-auto`}
                        >
                          <category.tabIcon className='w-8 h-8 text-white' />
                        </div>
                        <h3
                          className={`text-2xl font-bold text-center mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                        >
                          {category.title}
                        </h3>
                      </div>

                      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = skill.icon;
                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: skillIndex * 0.1,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant='secondary'
                                className='w-full justify-start p-3 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default border border-border/30 bg-secondary/60'
                              >
                                <SkillIcon
                                  className={`w-4 h-4 mr-2 ${skill.color}`}
                                />
                                <span className='text-sm font-medium'>
                                  {skill.name}
                                </span>
                              </Badge>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-16 text-center'
        >
          <Card className='max-w-2xl mx-auto p-8 bg-card/80 border border-border/50 shadow-xl backdrop-blur-sm'>
            <CardContent>
              <h3 className='text-2xl font-semibold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                Always Learning & Leading
              </h3>
              <p className='text-muted-foreground'>
                With 5+ years in software development and team leadership, I
                stay updated on new technologies and best practices to deliver
                reliable serverless solutions and support my team in achieving
                great results.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
