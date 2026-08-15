import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience & Skills', id: 'experience' },
    { name: 'Projects & Services', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300"
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-2xl border border-white/10 dark:border-white/10 light:border-slate-200'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
            id="nav-logo"
          >
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-amber-500 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-300 shrink-0"
            >
              <div className="w-full h-full bg-[#080B12] dark:bg-[#080B12] light:bg-white rounded-[9px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 text-sm tracking-wider">
                NF
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[#F8FAFC] dark:text-[#F8FAFC] light:text-[#0F172A] group-hover:text-emerald-400 transition-colors">
                Neha Fartiyal
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-500 -mt-1">
                Web Developer
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/80 p-1.5 rounded-full border border-white/5 dark:border-white/5 light:border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  id={`nav-link-${link.id}`}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white dark:text-white light:text-emerald-600 font-bold'
                      : 'text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-md shadow-emerald-500/20 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </motion.button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavClick(e, 'contact')}
              id="nav-cta-btn"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 group cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

          {/* Mobile Actions: Theme Toggle + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <motion.button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl glass-panel text-[#F8FAFC] dark:text-[#F8FAFC] light:text-[#0F172A] hover:bg-emerald-500/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5 text-emerald-400" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl glass-panel p-6 shadow-2xl border border-white/10 dark:border-white/10 light:border-slate-200"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.name}
                    onClick={(e) => handleNavClick(e, link.id)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer text-left w-full ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-600/30 to-teal-600/30 text-emerald-400 border border-emerald-500/30 font-bold'
                        : 'text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-600 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />}
                  </motion.button>
                );
              })}

              <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-col gap-3">
                <motion.button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/25 cursor-pointer"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Let's Talk</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
