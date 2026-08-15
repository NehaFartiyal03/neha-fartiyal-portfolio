import { motion } from 'framer-motion';
import {
  Sparkles,
  Smartphone,
  Code2,
  CheckCircle,
  Users,
  Eye,
  Heart,
  BookOpen
} from 'lucide-react';

export function WhyWorkWithMe() {
  const points = [
    { title: 'Modern UI', desc: 'Crafting visually appealing, fresh visual interfaces.', icon: Sparkles },
    { title: 'Responsive Design', desc: 'Seamless adaptability across desktop, tablet, & mobile screens.', icon: Smartphone },
    { title: 'Mobile Friendly', desc: 'Fast, touch-optimized user experiences.', icon: Smartphone },
    { title: 'Clean Code', desc: 'Maintainable, organized, and scalable codebase.', icon: Code2 },
    { title: 'Attention to Detail', desc: 'Pixel-perfect alignment, typography, and spacing.', icon: Eye },
    { title: 'User-Friendly Interfaces', desc: 'Intuitive navigation and clear user journeys.', icon: Heart },
    { title: 'Client-Focused Approach', desc: 'Clear communication and timely deliverables.', icon: Users },
    { title: 'Continuous Learning', desc: 'Staying updated with the latest web standards.', icon: BookOpen },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Large Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              CORE PHILOSOPHY
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Clean Code.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Thoughtful Design.
              </span><br />
              Better Experiences.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              Every website project is approached with dedication to quality, functional elegance, and user satisfaction.
            </p>
          </motion.div>

          {/* Right Highlights Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {points.map((p) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.94 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.12 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 group-hover:text-emerald-300 transition-colors"
                    >
                      <IconComp className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
