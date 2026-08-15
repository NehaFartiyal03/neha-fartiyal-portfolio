import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';
import { PageBackground } from '../components/PageBackground';

export function ExperienceSection() {
  return (
    <PageBackground pageId="experience">
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20"
            >
              CAREER JOURNEY
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight">
              Professional Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Building digital platforms, frontend interfaces, and full-stack solutions.
            </p>
          </motion.div>

          {/* Animated Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Connecting Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent -translate-x-1/2"
            />

            <div className="space-y-12">
              {experienceData.map((exp, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Badge Node */}
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: idx * 0.2 + 0.15 }}
                      whileHover={{ scale: 1.15 }}
                      className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#080B12] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/30 z-10"
                    >
                      <span className="font-mono text-xs font-bold">0{idx + 1}</span>
                    </motion.div>

                    {/* Card Container */}
                    <div className={`w-full sm:w-[calc(50%-2rem)] ml-10 sm:ml-0 ${
                      isEven ? 'sm:mr-auto sm:pr-4' : 'sm:ml-auto sm:pl-4'
                    }`}>
                      <motion.div
                        whileHover={{ y: -6, scale: 1.015 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        className="p-6 rounded-3xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 shadow-xl hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-colors duration-300 group">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                              Currently Working
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-300 transition-colors">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 mb-4 font-medium">
                          <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-teal-400" />
                            {exp.location}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
