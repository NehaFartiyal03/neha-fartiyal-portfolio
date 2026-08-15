import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      whileHover={{ scale: 1.1, rotate: 8 }}
      whileTap={{ scale: 0.88, rotate: -8 }}
      className="relative p-2.5 rounded-full glass-panel text-[#F8FAFC] dark:text-[#F8FAFC] light:text-[#0F172A] hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-colors duration-300 group focus:outline-none"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : -180, scale: theme === 'light' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Sun className="w-4 h-4 text-amber-500 group-hover:text-amber-400" />
      </motion.div>
    </motion.button>
  );
}
