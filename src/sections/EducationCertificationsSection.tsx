import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';
import { certificationsData } from '../data/certifications';
import { PageBackground } from '../components/PageBackground';

export function EducationCertificationsSection() {
  return (
    <PageBackground pageId="education">
      <section id="education" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  ACADEMICS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-emerald-400" />
                  Education
                </h2>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    className="p-6 rounded-3xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-colors duration-300 group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      {edu.status && (
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-300 transition-colors">
                      {edu.degree}
                    </h3>

                    <p className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                      {edu.institution}
                    </p>

                    {edu.location && (
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-teal-400" />
                        {edu.location}
                      </p>
                    )}

                    {edu.cgpa && (
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">CGPA / Performance:</span>
                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          {edu.cgpa}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                  VERIFICATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight flex items-center gap-3">
                  <Award className="w-8 h-8 text-teal-400" />
                  Certifications
                </h2>
              </div>

              <div className="space-y-4">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, scale: 1.01, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    className="p-5 rounded-3xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10 transition-colors duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="p-2.5 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-teal-300 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 font-semibold">{cert.issuer}</p>
                        <span className="inline-block mt-2 text-[10px] font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-white/5">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
