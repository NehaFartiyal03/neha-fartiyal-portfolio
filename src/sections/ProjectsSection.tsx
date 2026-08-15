import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Building2, ShieldCheck, ArrowRight, Layers, Eye } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { HrmModal } from '../components/HrmModal';
import { ProjectModal } from '../components/ProjectModal';
import { PageBackground } from '../components/PageBackground';

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHrmOpen, setIsHrmOpen] = useState(false);
  const [isStandardModalOpen, setIsStandardModalOpen] = useState(false);

  const filterCategories = [
    'All',
    'Featured',
    'Websites',
    'Web Applications',
    'NGO / Organization',
    'Wellness',
    'Agriculture / Dairy'
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return project.featured;
    if (selectedFilter === 'Websites') return project.type === 'Website';
    if (selectedFilter === 'Web Applications') return project.type === 'Full-Stack Web Application' || project.type === 'Web Application';
    return project.category === selectedFilter;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    if (project.isHrmSpecial) {
      setIsHrmOpen(true);
    } else {
      setIsStandardModalOpen(true);
    }
  };

  const hrmProject = projectsData.find((p) => p.isHrmSpecial);

  return (
    <PageBackground pageId="projects">
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight">
              Selected Work & Real Websites
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Real client websites deployed live and full-stack web applications designed for enterprise operations.
            </p>
          </div>

          {/* Filter Categories Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterCategories.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-colors duration-300 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* FEATURED FULL-STACK WEB APP BANNER (HRM SYSTEM) */}
          {hrmProject && (selectedFilter === 'All' || selectedFilter === 'Featured' || selectedFilter === 'Web Applications') && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 rounded-3xl p-6 sm:p-8 glass-panel border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-[#0B0F19] to-teal-950/30 shadow-2xl relative overflow-hidden group hover:border-emerald-500/60 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-500/30">
                      FEATURED FULL-STACK WEB APPLICATION
                    </span>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {hrmProject.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {hrmProject.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {hrmProject.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {hrmProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/90 text-emerald-300 border border-emerald-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <motion.button
                      onClick={() => handleProjectClick(hrmProject)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-500/30 transition-colors flex items-center gap-2 group/btn cursor-pointer"
                    >
                      <span>View Interactive Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Right Mockup Representation */}
                <div
                  onClick={() => handleProjectClick(hrmProject)}
                  className="lg:col-span-6 rounded-2xl bg-slate-950 border border-white/10 p-5 shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300 group/mockup relative"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-[11px] ml-1 text-slate-400">ENIGOAL HRM Portal</span>
                    </div>
                    <span className="text-[10px] font-mono text-teal-400 font-bold">RBAC Supported</span>
                  </div>

                  <div className="pt-4 space-y-3 text-xs">
                    <div className="p-3 bg-slate-900 rounded-xl border border-white/5 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">HR & Attendance Dashboard</p>
                        <p className="text-[10px] text-slate-400">Employee Profiles, Leaves, Records</p>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                        Active Preview
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 bg-slate-900/80 rounded-lg text-center border border-white/5">
                        <p className="text-[9px] text-slate-400">Employees</p>
                        <p className="font-bold text-white text-sm">Centralized</p>
                      </div>
                      <div className="p-2.5 bg-slate-900/80 rounded-lg text-center border border-white/5">
                        <p className="text-[9px] text-slate-400">Attendance</p>
                        <p className="font-bold text-emerald-400 text-sm">Timestamps</p>
                      </div>
                      <div className="p-2.5 bg-slate-900/80 rounded-lg text-center border border-white/5">
                        <p className="text-[9px] text-slate-400">Leaves</p>
                        <p className="font-bold text-teal-400 text-sm">Workflows</p>
                      </div>
                    </div>
                  </div>

                  {/* Overlay Prompt */}
                  <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-[2px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xl flex items-center gap-2">
                      <Eye className="w-4 h-4" /> Open Interactive Demo
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ASYMMETRICAL FEATURED WEBSITES SHOWCASE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects
                .filter((p) => !p.isHrmSpecial)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-3xl p-6 glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{project.year}</span>
                      </div>

                      {/* Website Mockup Preview Box */}
                      <div
                        onClick={() => handleProjectClick(project)}
                        className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 border border-white/10 cursor-pointer overflow-hidden group/card min-h-[160px] flex flex-col justify-center"
                      >
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/80" />
                          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>

                        <div className="mt-4 text-center">
                          <Building2 className="w-8 h-8 text-emerald-400 mx-auto mb-2 opacity-80 group-hover/card:scale-110 transition-transform duration-300" />
                          <h4 className="text-xl font-bold text-white group-hover/card:text-emerald-300 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs font-mono text-slate-400 mt-1">{project.liveUrl}</p>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <span className="text-xs font-bold text-white bg-emerald-600 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" /> Quick Preview
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                      <motion.button
                        onClick={() => handleProjectClick(project)}
                        whileHover={{ x: 3 }}
                        className="link-underline text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        Project Details
                      </motion.button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5"
                        >
                          <span>View Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Modals */}
        <HrmModal
          project={hrmProject || null}
          isOpen={isHrmOpen}
          onClose={() => setIsHrmOpen(false)}
        />

        <ProjectModal
          project={selectedProject}
          isOpen={isStandardModalOpen}
          onClose={() => setIsStandardModalOpen(false)}
        />
      </section>
    </PageBackground>
  );
}
