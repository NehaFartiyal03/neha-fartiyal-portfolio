import { motion } from 'framer-motion';
import { Sparkles, Building2, GraduationCap, Laptop, ShieldCheck } from 'lucide-react';
import { PageBackground } from '../components/PageBackground';

export function AboutSection() {
  const highlights = [
    {
      title: '4 Months',
      subtitle: 'Web Development Experience',
      icon: Sparkles,
      color: 'from-emerald-500 to-amber-400'
    },
    {
      title: 'Currently Working',
      subtitle: 'Web Developer at ENIGOAL',
      icon: Building2,
      color: 'from-teal-500 to-amber-500'
    },
    {
      title: 'MCA Pursuing',
      subtitle: 'DIT University, Dehradun',
      icon: GraduationCap,
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: 'Freelance Ready',
      subtitle: 'Client Website Development',
      icon: Laptop,
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  return (
    <PageBackground pageId="about">
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl p-8 glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 shadow-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 via-[#0B0F19] to-slate-950">
                {/* Subtle background blur circle */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-600 to-amber-500 p-[2px] shadow-xl shadow-emerald-500/20 shrink-0">
                      <div className="w-full h-full bg-[#080B12] rounded-[14px] flex items-center justify-center font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 tracking-wider">
                        NF
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        BIOGRAPHY & PROFILE
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-1">Neha Fartiyal</h3>
                      <p className="text-xs text-emerald-400 font-mono font-bold">Web Developer & Freelancer</p>
                      <p className="text-xs text-slate-400">From Dehradun, Uttarakhand, India</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                      <span>ENIGOAL Startup Advisory Private Limited</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Building production-ready responsive websites, internal HRM web applications, and frontend solutions.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Status: Active Web Developer</span>
                    <span className="text-emerald-400">Uttarakhand, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  ABOUT ME
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight">
                  Turning Ideas Into Digital Experiences.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                I am a Web Developer passionate about creating modern, responsive and user-friendly websites and web applications. I enjoy transforming ideas into clean digital experiences with thoughtful UI, responsive layouts and interactive frontend development.
              </p>

              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed p-4 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300">
                I am currently working as a Web Developer at <span className="text-white dark:text-white light:text-slate-900 font-bold">ENIGOAL Startup Advisory Private Limited, Noida</span>.
              </p>

              {/* Grid Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-r ${item.color} text-slate-950 font-bold`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-300 transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
