import { motion } from 'framer-motion';
import { MessageSquare, Layout, Code, CheckCircle, Send } from 'lucide-react';

export function WorkProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'DISCUSS',
      desc: 'Understand project goals, audience, and technical requirements.',
      icon: MessageSquare,
      color: 'from-emerald-500 to-amber-500'
    },
    {
      num: '02',
      title: 'PLAN',
      desc: 'Plan website structure, layout wireframes, and design direction.',
      icon: Layout,
      color: 'from-amber-500 to-teal-500'
    },
    {
      num: '03',
      title: 'DEVELOP',
      desc: 'Build the responsive website with clean, performant React/Tailwind code.',
      icon: Code,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      num: '04',
      title: 'REVIEW',
      desc: 'Fine-tune UI details and execute agreed revisions with precision.',
      icon: CheckCircle,
      color: 'from-amber-400 to-orange-500'
    },
    {
      num: '05',
      title: 'DELIVER',
      desc: 'Deliver complete final website source files ready for launch.',
      icon: Send,
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 tracking-tight">
            How We Work Together
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            A structured, transparent 5-step process from initial concept to final delivery.
          </p>
        </motion.div>

        {/* Steps Grid with Animated Connecting Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="relative p-6 rounded-3xl glass-panel border border-white/10 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 transition-colors duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-emerald-400 transition-colors">
                      {step.num}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`p-2.5 rounded-xl bg-gradient-to-r ${step.color} text-slate-950 font-bold shadow-md`}
                    >
                      <IconComp className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
