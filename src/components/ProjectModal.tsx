import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, Calendar, Tag, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-3xl glass-panel bg-[#0B0F19] dark:bg-[#0B0F19] light:bg-slate-900 text-white border border-white/10 shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/60">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
            </div>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-xs uppercase font-mono text-slate-400 font-bold mb-2">Project Overview</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-[10px] uppercase font-mono text-slate-400 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-emerald-400" /> Project Type
                </span>
                <p className="text-xs font-bold text-white mt-1">{project.type}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-[10px] uppercase font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-teal-400" /> Deployment Year
                </span>
                <p className="text-xs font-bold text-white mt-1">{project.year}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono text-slate-400 font-bold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.liveUrl && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Live Production Website</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 truncate max-w-xs">{project.liveUrl}</p>
                </div>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/30 transition-shadow"
                >
                  <span>View Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-900/80 border-t border-white/10 flex items-center justify-end">
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
