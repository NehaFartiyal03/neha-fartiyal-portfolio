import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhyWorkWithMe } from './sections/WhyWorkWithMe';
import { WorkProcessSection } from './sections/WorkProcessSection';
import { EducationCertificationsSection } from './sections/EducationCertificationsSection';
import { FreelanceCtaSection } from './sections/FreelanceCtaSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PageNavigationButtons } from './components/PageNavigationButtons';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] dark:bg-[#080B12] dark:text-[#F8FAFC] light:bg-[#F8FAFC] light:text-[#0F172A] relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col justify-between">
      <div>
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Multi-page Navbar */}
        <Navbar activeSection={activePage} onNavigate={handlePageChange} />

        {/* Main Multi-Page Container */}
        <main className="pt-4 min-h-[75vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {activePage === 'home' && (
                <div className="space-y-12">
                  <HeroSection
                    onOpenResume={() => setIsResumeOpen(true)}
                    onNavigate={handlePageChange}
                  />
                  <WhyWorkWithMe />
                  <WorkProcessSection />
                  <FreelanceCtaSection onNavigate={handlePageChange} />
                </div>
              )}

              {activePage === 'about' && (
                <div className="space-y-12">
                  <AboutSection />
                  <EducationCertificationsSection />
                </div>
              )}

              {activePage === 'experience' && (
                <div className="space-y-12">
                  <ExperienceSection />
                  <SkillsSection />
                </div>
              )}

              {activePage === 'projects' && (
                <div className="space-y-12">
                  <ProjectsSection />
                  <ServicesSection />
                </div>
              )}

              {activePage === 'contact' && <ContactSection />}

              {/* Next/Previous Page Navigation Footer on every page */}
              <PageNavigationButtons
                currentPageId={activePage}
                onNavigate={handlePageChange}
              />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <Footer onNavigate={handlePageChange} />

      {/* Resume Download / Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

