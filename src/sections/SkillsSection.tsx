import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  FileCode2,
  Code2,
  Palette,
  Layout,
  Sparkles,
  Server,
  Cpu,
  Database,
  Table,
  Coffee,
  Terminal,
  GitBranch,
  Github,
  Laptop
} from 'lucide-react';
import { skillsData } from '../data/skills';
import { Skill } from '../types';
import { PageBackground } from '../components/PageBackground';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'Tools'];

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return Atom;
      case 'FileCode2': return FileCode2;
      case 'Code2': return Code2;
      case 'Palette': return Palette;
      case 'Layout': return Layout;
      case 'Sparkles': return Sparkles;
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Database': return Database;
      case 'Table': return Table;
      case 'Coffee': return Coffee;
      case 'Terminal': return Terminal;
      case 'GitBranch': return GitBranch;
      case 'Github': return Github;
      case 'Laptop': return Laptop;
      default: return Code2;
    }
  };

  return (
    <PageBackground pageId="skills">
      <section id="skills" className="py-24 relative overflow-hidden">
        {/* Background Decorative Typography */}
        <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none select-none opacity-20 dark:opacity-20 light:opacity-10 overflow-hidden">
          <span className="text-[120px] sm:text-[180px] font-black font-mono tracking-tighter text-stroke-decorative -mt-10">
            BUILD
          </span>
          <span className="text-[120px] sm:text-[180px] font-black font-mono tracking-tighter text-stroke-decorative">
            DESIGN
          </span>
          <span className="text-[120px] sm:text-[180px] font-black font-mono tracking-tighter text-stroke-decorative -mb-10">
            CREATE
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              TECHNICAL TOOLBOX
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight">
              Skills & Competencies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Interactive overview of core languages, frameworks, databases, and development software.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-colors duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill) => {
              const IconComp = getIcon(skill.icon);
              const isHovered = hoveredSkill?.name === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="relative p-5 rounded-2xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[140px]"
                >
                  {/* Glow Background on Hover */}
                  {isHovered && (
                    <motion.div
                      layoutId="skillGlow"
                      className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-transparent rounded-2xl pointer-events-none"
                    />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 group-hover:border-emerald-400/40 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      <IconComp className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>

                  <div className="mt-4 relative z-10">
                    <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {skill.shortDescription}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
