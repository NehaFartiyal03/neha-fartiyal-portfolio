import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface PageNavigationButtonsProps {
  currentPageId: string;
  onNavigate: (pageId: string) => void;
}

interface PageDef {
  id: string;
  name: string;
  subtitle: string;
}

const PAGES: PageDef[] = [
  { id: 'home', name: 'Home', subtitle: 'Overview & Process' },
  { id: 'about', name: 'About & Education', subtitle: 'Biography & Degrees' },
  { id: 'experience', name: 'Experience & Skills', subtitle: 'Career & Tech Stack' },
  { id: 'projects', name: 'Projects & Services', subtitle: 'Portfolio & Offerings' },
  { id: 'contact', name: 'Get In Touch', subtitle: 'Hire & Discuss Project' },
];

export function PageNavigationButtons({ currentPageId, onNavigate }: PageNavigationButtonsProps) {
  const currentIndex = PAGES.findIndex((p) => p.id === currentPageId);
  if (currentIndex === -1) return null;

  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : PAGES[0]; // loop back or go to contact

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10 my-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous Page Button */}
        {prevPage ? (
          <motion.button
            whileHover={{ scale: 1.03, x: -4 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate(prevPage.id)}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel border border-white/10 hover:border-emerald-500/40 text-left transition-all flex items-center gap-4 group cursor-pointer shadow-lg shadow-black/40"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-300 transition-colors">
                Previous Page ({currentIndex} / {PAGES.length})
              </p>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-200 transition-colors">
                {prevPage.name}
              </h4>
            </div>
          </motion.button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Page Steps Dots Indicator */}
        <div className="flex items-center gap-1.5 py-2 px-3 rounded-full bg-slate-900/60 border border-white/10">
          {PAGES.map((page, idx) => {
            const isActive = page.id === currentPageId;
            return (
              <motion.button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                title={page.name}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.85 }}
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                    : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            );
          })}
        </div>

        {/* Next Page Button */}
        <motion.button
          whileHover={{ scale: 1.03, x: 4 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onNavigate(nextPage.id)}
          className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-teal-500 text-white text-right transition-all flex items-center justify-end gap-4 group cursor-pointer shadow-xl shadow-emerald-500/20 border border-emerald-400/30"
        >
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-200 flex items-center justify-end gap-1">
              <span>Go To Next Page ({currentIndex + 2 > PAGES.length ? 1 : currentIndex + 2} / {PAGES.length})</span>
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
            </p>
            <h4 className="text-sm font-extrabold text-white group-hover:text-emerald-100 transition-colors">
              {nextPage.name}
            </h4>
          </div>
          <div className="p-3 rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-emerald-600 transition-colors shrink-0">
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.button>
      </div>
    </div>
  );
}
