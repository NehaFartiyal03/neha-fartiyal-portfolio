import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Grid, LayoutList } from 'lucide-react';

interface PagePaginationProps {
  currentPageId: string;
  onNavigatePage: (pageId: string) => void;
  viewMode: 'single' | 'multi';
  onToggleViewMode: () => void;
}

const pageOrder = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export function PagePagination({
  currentPageId,
  onNavigatePage,
  viewMode,
  onToggleViewMode
}: PagePaginationProps) {
  const currentIndex = pageOrder.findIndex((p) => p.id === currentPageId);

  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-slate-950/40 dark:bg-slate-950/40 light:bg-slate-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Previous Page Button */}
          {prevPage ? (
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigatePage(prevPage.id)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel text-left hover:border-emerald-500/40 transition-all group flex items-center gap-3 cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Previous Page</p>
                <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {prevPage.label}
                </p>
              </div>
            </motion.button>
          ) : (
            <div />
          )}

          {/* View Mode Toggle Pill */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => {
                if (viewMode !== 'multi') onToggleViewMode();
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'multi'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Multi-Page View</span>
            </button>

            <button
              onClick={() => {
                if (viewMode !== 'single') onToggleViewMode();
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'single'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>All-In-One Scroll</span>
            </button>
          </motion.div>

          {/* Next Page Button */}
          {nextPage ? (
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigatePage(nextPage.id)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel text-right hover:border-emerald-500/40 transition-all group flex items-center justify-end gap-3 cursor-pointer"
            >
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Next Page</p>
                <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {nextPage.label}
                </p>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigatePage('home')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel text-right hover:border-emerald-500/40 transition-all group flex items-center justify-end gap-3 cursor-pointer"
            >
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Return To</p>
                <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Home Page
                </p>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 group-hover:-translate-y-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
