import React, { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickLink = (e: MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      scrollToTop();
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About & Education', id: 'about' },
    { name: 'Experience & Skills', id: 'experience' },
    { name: 'Projects & Services', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#05070D] border-t border-white/10 text-slate-400 py-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-[1px]"
              >
                <div className="w-full h-full bg-[#080B12] rounded-[11px] flex items-center justify-center font-bold text-xs text-emerald-400">
                  NF
                </div>
              </motion.div>
              <span className="font-bold text-lg text-white">Neha Fartiyal</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Web Developer & Freelance Website Developer creating modern, responsive, and engaging websites and web applications.
            </p>
            <p className="text-xs font-mono text-emerald-400">
              Web Developer at ENIGOAL Startup Advisory Private Limited, Noida.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-3"
          >
            <p className="text-xs font-mono uppercase text-white font-bold tracking-wider">Pages Navigation</p>
            <ul className="space-y-2 text-xs">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={(e) => handleQuickLink(e, item.id)}
                    whileHover={{ x: 4, color: '#ffffff' }}
                    className="link-underline hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 space-y-3"
          >
            <p className="text-xs font-mono uppercase text-white font-bold tracking-wider">Contact & Socials</p>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href="mailto:fartiyalneha82@gmail.com" className="link-underline hover:text-white transition-colors">
                  fartiyalneha82@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href="tel:+919084488956" className="link-underline hover:text-white transition-colors">
                  +91-9084488956
                </a>
              </p>
              <div className="pt-2 flex gap-3 text-xs">
                <motion.a
                  href="https://linkedin.com/in/neha-fartiyal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/nehafartiyal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-teal-400" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Neha Fartiyal. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-emerald-500/30 transition-colors flex items-center gap-1.5 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span className="font-mono text-[10px] uppercase">Back to Top</span>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}
