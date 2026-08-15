import { motion } from 'framer-motion';
import { MessageSquareCode, ArrowUpRight, Sparkles, Briefcase } from 'lucide-react';

interface FreelanceCtaSectionProps {
  onNavigate?: (id: string) => void;
}

export function FreelanceCtaSection({ onNavigate }: FreelanceCtaSectionProps) {
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
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 glass-panel border border-emerald-500/30 bg-gradient-to-r from-emerald-950/60 via-[#0B0F19] to-teal-950/60 shadow-2xl overflow-hidden text-center"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none orb-float-slow" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              FREELANCE SERVICES AVAILABLE
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Have a Website Idea?
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Let's turn your idea into a modern digital experience.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <motion.button
                onClick={() => handleScrollTo('contact')}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="shimmer-hover px-8 py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow flex items-center gap-2 group"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                onClick={() => handleScrollTo('projects')}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-xs sm:text-sm text-white glass-panel hover:bg-white/10 border border-white/20 transition-colors flex items-center gap-2 group"
              >
                <Briefcase className="w-4 h-4 text-teal-400" />
                <span>View My Work</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
