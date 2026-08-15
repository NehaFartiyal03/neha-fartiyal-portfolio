import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Layout, Sparkles, CheckCircle2, ShieldCheck, Database, Server, Layers } from 'lucide-react';

export function InteractiveBrowserVisual() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'stack'>('preview');

  const floatingBadges = [
    { name: 'React', color: 'from-amber-500 to-emerald-500', pos: 'top-[-16px] left-[-16px]', delay: 0 },
    { name: 'TypeScript', color: 'from-emerald-600 to-teal-600', pos: 'top-[20%] right-[-24px]', delay: 0.5 },
    { name: 'JavaScript', color: 'from-amber-400 to-yellow-500', pos: 'bottom-[30%] left-[-28px]', delay: 1.0 },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-amber-500', pos: 'bottom-[-16px] right-[10%]', delay: 1.5 },
    { name: 'Node.js', color: 'from-emerald-500 to-green-600', pos: 'top-[-12px] right-[20%]', delay: 2.0 },
    { name: 'MongoDB', color: 'from-green-500 to-emerald-700', pos: 'bottom-[10%] left-[10%]', delay: 2.5 },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {/* Background Soft Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt" />

      {/* Floating Badges */}
      {floatingBadges.map((badge, idx) => (
        <motion.div
          key={badge.name}
          className={`absolute ${badge.pos} z-20 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-white bg-slate-900/90 border border-white/10 shadow-xl backdrop-blur-md`}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: badge.delay,
          }}
        >
          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${badge.color} animate-pulse`} />
          {badge.name}
        </motion.div>
      ))}

      {/* Main Browser Frame */}
      <div className="relative rounded-2xl glass-panel overflow-hidden border border-white/10 dark:border-white/10 light:border-slate-300 shadow-2xl bg-[#0B0F19]/90 dark:bg-[#0B0F19]/90 light:bg-slate-900 text-white">
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
              https://neha-fartiyal.dev
            </span>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-white/5">
            <motion.button
              onClick={() => setActiveTab('preview')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'preview'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Preview</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('code')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'code'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('stack')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'stack'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Stack</span>
            </motion.button>
          </div>
        </div>

        {/* Browser Content Window */}
        <div className="p-6 min-h-[320px] sm:min-h-[360px] flex flex-col justify-between">
          {activeTab === 'preview' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Header Bar Mock */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    NF
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">ENIGOAL Web Developer</p>
                    <p className="text-[10px] text-slate-400">Noida, Uttar Pradesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Available for Hire</span>
                </div>
              </div>

              {/* Interactive Mock Dashboard Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-900/30 to-slate-900/50 border border-emerald-500/20">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-emerald-400">Featured System</p>
                  <p className="text-sm font-bold text-white mt-1">HRM & Attendance</p>
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full-Stack Web App</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-br from-teal-900/30 to-slate-900/50 border border-teal-500/20">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-teal-400">Live Client Sites</p>
                  <p className="text-sm font-bold text-white mt-1">NGOs & Enterprises</p>
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>4+ Deployed Projects</span>
                  </div>
                </div>
              </div>

              {/* Code Status Indicator */}
              <div className="p-3 rounded-xl bg-slate-950/80 font-mono text-xs text-slate-300 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-semibold">Dev Server Ready:</span>
                  <span className="text-slate-400">localhost:3000</span>
                </div>
                <span className="text-[10px] text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  React 19 + Tailwind v4
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xs space-y-2 text-slate-300 bg-slate-950 p-4 rounded-xl border border-white/10"
            >
              <div className="text-slate-500">// NehaFartiyal.tsx - Developer Profile</div>
              <div>
                <span className="text-teal-400">import</span> &#123; Developer &#125; <span className="text-teal-400">from</span> <span className="text-emerald-300">'@neha/core'</span>;
              </div>
              <br />
              <div>
                <span className="text-emerald-400">export const</span> <span className="text-amber-300">developer</span>: <span className="text-amber-300">Developer</span> = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-emerald-300">'Neha Fartiyal'</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-emerald-300">'Web Developer & Freelancer'</span>,
              </div>
              <div className="pl-4">
                location: <span className="text-emerald-300">'Noida, UP, India'</span>,
              </div>
              <div className="pl-4">
                skills: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'MongoDB'</span>],
              </div>
              <div className="pl-4">
                status: <span className="text-emerald-300">'Open to Freelance Projects'</span>
              </div>
              <div>&#125;;</div>
            </motion.div>
          )}

          {activeTab === 'stack' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Frontend</p>
                  <p className="text-[10px] text-slate-400">React, TypeScript, Tailwind</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Backend</p>
                  <p className="text-[10px] text-slate-400">Node.js, Express.js</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Database</p>
                  <p className="text-[10px] text-slate-400">MongoDB, MySQL</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Tools & UI</p>
                  <p className="text-[10px] text-slate-400">Git, GitHub, Figma, VS Code</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom Interactive Terminal Status */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              System Status: Active
            </span>
            <span className="text-slate-500">Noida • 4 Mos Exp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
