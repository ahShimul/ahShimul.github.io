import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Abul Hasnat | Software Engineering Team Lead',
  description:
    "Welcome to Abul Hasnat's portfolio. Experienced Software Engineering Team Lead specializing in serverless applications, AWS cloud solutions, and full-stack development with 5+ years of experience.",
  alternates: {
    canonical: 'https://www.iamhasnat.com',
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className='min-h-screen'>
        {/* Hero Section - Introduction */}
        <section id='home' aria-label='Introduction and overview'>
          <HeroSection />
        </section>

        {/* About Section - Personal background */}
        <section id='about' aria-label='About Abul Hasnat'>
          <AboutSection />
        </section>

        {/* Skills Section - Technical expertise */}
        <section id='skills' aria-label='Technical skills and technologies'>
          <SkillsSection />
        </section>

        {/* Projects Section - Portfolio showcase */}
        <section id='projects' aria-label='Featured projects and work'>
          <ProjectsSection />
        </section>

        {/* Experience Section - Professional background */}
        <section
          id='experience'
          aria-label='Professional experience and career'
        >
          <ExperienceSection />
        </section>

        {/* Contact Section - Get in touch */}
        <section id='contact' aria-label='Contact information and form'>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
