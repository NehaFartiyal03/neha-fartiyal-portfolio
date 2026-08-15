import { motion } from 'framer-motion';
import { Home, ChevronRight, Sparkles } from 'lucide-react';
import { pageBackgrounds } from '../data/backgrounds';

interface PageHeaderProps {
  pageId: string;
  onNavigateHome?: () => void;
  customTitle?: string;
  customSubtitle?: string;
  customBadge?: string;
}

export function PageHeader({
  pageId,
  onNavigateHome,
  customTitle,
  customSubtitle,
  customBadge
}: PageHeaderProps) {
  const config = pageBackgrounds[pageId] || pageBackgrounds.home;

  const title = customTitle || config.title;
  const subtitle = customSubtitle || config.subtitle;
  const badge = customBadge || config.badge;

  return (
    <div className="relative pt-28 pb-12 overflow-hidden border-b border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-xs font-mono mb-6 text-slate-400"
        >
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-emerald-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-white dark:text-white light:text-slate-900 font-bold uppercase tracking-wider">
            {pageId}
          </span>
        </motion.div>

        {/* Page Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-3xl space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {badge}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white dark:text-white light:text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
