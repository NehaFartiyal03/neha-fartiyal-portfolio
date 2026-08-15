import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Rocket,
  HeartHandshake,
  Smartphone,
  RefreshCw,
  Code,
  Layers,
  Info
} from 'lucide-react';
import { servicesData, serviceDisclaimer } from '../data/services';
import { PageBackground } from '../components/PageBackground';

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return Briefcase;
      case 'Building2': return Building2;
      case 'Rocket': return Rocket;
      case 'HeartHandshake': return HeartHandshake;
      case 'Smartphone': return Smartphone;
      case 'RefreshCw': return RefreshCw;
      case 'Code': return Code;
      case 'Layers': return Layers;
      default: return Code;
    }
  };

  return (
    <PageBackground pageId="services">
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
              FREELANCE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight">
              What I Can Build For You
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Tailored website development solutions for businesses, startups, organizations, and entrepreneurs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, idx) => {
              const IconComp = getIcon(service.icon);

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="p-6 rounded-3xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-colors duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-black font-mono text-slate-500 dark:text-slate-500 light:text-slate-400 group-hover:text-emerald-400 transition-colors">
                        {service.number}
                      </span>
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-md"
                      >
                        <IconComp className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <span>Custom Development</span>
                    <span>→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Disclaimer Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 max-w-3xl mx-auto flex items-start gap-3 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
          >
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-bold text-white dark:text-white light:text-slate-900">Important Note:</span> {serviceDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>
    </PageBackground>
  );
}
