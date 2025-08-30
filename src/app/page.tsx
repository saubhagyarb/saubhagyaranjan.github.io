import Header from '@/components/header';
import HeroSection from '@/components/hero';
import AboutSection from '@/components/about';
import  {ProjectsSection } from '@/components/projects';
import ResumeSection from '@/components/resume';
import TechStackSection from '@/components/icons/tech-stack';
import ContactSection from '@/components/contact';
import Footer from '@/components/footer';
import Fab from '@/components/fab';
import { AnimatedSection } from '@/components/animated-section';
import InstagramFeed from '@/components/instagram-feed';
import ResumeDisplay from '@/components/resume-display';
import LinkedInFeed from '@/components/linkedin-feed';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ResumeSection />
        </AnimatedSection>
        <AnimatedSection>
          <ResumeDisplay />
        </AnimatedSection>
        <AnimatedSection>
          <TechStackSection />
        </AnimatedSection>
        <AnimatedSection>
          <LinkedInFeed />
        </AnimatedSection>
        <AnimatedSection>
          <InstagramFeed />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
