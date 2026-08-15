import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageBackgrounds } from '../data/backgrounds';

const orbColorMap: Record<string, { primary: string; secondary: string }> = {
  emerald: { primary: 'bg-emerald-500', secondary: 'bg-amber-600' },
  teal: { primary: 'bg-teal-600', secondary: 'bg-emerald-600' },
  amber: { primary: 'bg-amber-500', secondary: 'bg-teal-600' },
};

interface PageBackgroundProps {
  pageId: string;
  className?: string;
  children?: ReactNode;
  showGridOverlay?: boolean;
}

export function PageBackground({
  pageId,
  className = '',
  children,
  showGridOverlay = true
}: PageBackgroundProps) {
  const bgConfig = pageBackgrounds[pageId] || pageBackgrounds.home;
  const orbColors = orbColorMap[bgConfig.accentColor] || orbColorMap.emerald;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image Layer with Opacity Overlay */}
      {bgConfig.imageUrl && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.img
            src={bgConfig.imageUrl}
            alt=""
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-center opacity-20 dark:opacity-25 light:opacity-10 filter blur-[1px]"
            aria-hidden="true"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${bgConfig.overlayGradient}`} />
        </div>
      )}

      {/* Radial Light Glows based on page accent color */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Radial Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-25 dark:opacity-30 light:opacity-15 orb-float-slow ${orbColors.primary}`}
        />

        {/* Bottom Right Radial Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-20 dark:opacity-25 light:opacity-10 orb-float-slow-alt ${orbColors.secondary}`}
        />
      </div>

      {/* Modern Developer Grid overlay pattern */}
      {showGridOverlay && (
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"
          aria-hidden="true"
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
