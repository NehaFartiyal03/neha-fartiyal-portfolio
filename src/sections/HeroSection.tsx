import { motion } from 'framer-motion';
import { ArrowDown, MessageSquareCode, Briefcase, FileText, Sparkles } from 'lucide-react';
import { InteractiveBrowserVisual } from '../components/InteractiveBrowserVisual';
import { PageBackground } from '../components/PageBackground';
import { ProfileAvatar } from '../components/ProfileAvatar';

interface HeroSectionProps {
  onOpenResume: () => void;
  onNavigate?: (id: string) => void;
}

export function HeroSection({ onOpenResume, onNavigate }: HeroSectionProps) {
  const handleScrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <PageBackground pageId="home">
      <section
        id="home"
        className="relative min-h-[90vh] pt-28 sm:pt-36 pb-20 flex flex-col justify-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>● AVAILABLE FOR FREELANCE PROJECTS</span>
              </motion.div>

              {/* Developer Profile Header with Avatar */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-1">
                <ProfileAvatar size="lg" />

                <div className="space-y-1 text-center sm:text-left">
                  <p className="text-lg sm:text-2xl font-semibold text-emerald-400 font-mono tracking-tight">
                    Hi, I'm Neha Fartiyal
                  </p>
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-none">
                    Web Developer
                  </h1>
                </div>
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Creating modern, responsive, and engaging websites and web applications with a strong focus on clean UI, user experience, and performance.
              </p>

              {/* Current Position Note */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 px-4 py-2.5 rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-300 shadow-md">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Web Developer at ENIGOAL Startup Advisory Private Limited, Noida.</span>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScrollTo('projects')}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  <span>View My Work</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScrollTo('contact')}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white glass-panel hover:bg-white/10 border border-white/15 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <MessageSquareCode className="w-4 h-4 text-teal-400 transition-transform group-hover:scale-110" />
                  <span>Let's Work Together</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenResume}
                  className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-300 hover:text-white glass-panel hover:bg-emerald-500/10 border border-white/10 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <InteractiveBrowserVisual />
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16 text-center">
            <button
              onClick={() => handleScrollTo('about')}
              className="inline-flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors group focus:outline-none cursor-pointer"
              aria-label="Scroll to About section"
            >
              <span className="tracking-widest uppercase text-[10px] font-bold">Explore Developer Profile</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="p-2 rounded-full glass-panel border border-white/10 group-hover:border-emerald-500/30"
              >
                <ArrowDown className="w-4 h-4 text-emerald-400" />
              </motion.div>
            </button>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
