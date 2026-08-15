import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Briefcase, GraduationCap, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleDownload = () => {
    // Trigger confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Download resume link
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Neha_Fartiyal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
          className="relative w-full max-w-3xl rounded-3xl glass-panel bg-[#0B0F19] dark:bg-[#0B0F19] light:bg-slate-900 text-white border border-white/10 shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Neha Fartiyal — Resume Summary</h3>
                <p className="text-xs text-slate-400">Web Developer & Freelance Website Developer • Noida</p>
              </div>
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

          {/* Body preview */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Download CTA Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-slate-900 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Get Official PDF Resume</p>
                <p className="text-xs text-slate-300 mt-0.5">Updated for 2026 • Verified Contact & Experience Details</p>
              </div>

              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="shimmer-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </motion.button>
            </div>

            {/* Quick Experience */}
            <div>
              <h4 className="text-xs uppercase font-mono text-emerald-400 font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Work Experience
              </h4>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-white text-sm">Web Developer</h5>
                    <p className="text-xs text-emerald-400">ENIGOAL Startup Advisory Private Limited • Noida</p>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Currently Working</span>
                </div>
                <p className="text-xs text-slate-300">
                  4 Months of hands-on Web Development experience handling frontend user interfaces, responsive website builds, and modern tech stack implementations.
                </p>
              </div>
            </div>

            {/* Quick Education */}
            <div>
              <h4 className="text-xs uppercase font-mono text-teal-400 font-bold mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h4>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-white text-sm">Master of Computer Applications (MCA)</h5>
                    <p className="text-xs text-slate-400">DIT University, Dehradun, Uttarakhand</p>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">2024 – 2026 (Pursuing)</span>
                </div>
                <p className="text-xs text-emerald-400 font-semibold">CGPA: 7.74</p>
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <h4 className="text-xs uppercase font-mono text-amber-400 font-bold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Key Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'HTML/CSS', 'Git/GitHub'].map(sk => (
                  <span key={sk} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-white/10">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-900/80 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400">Email: fartiyalneha82@gmail.com</span>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
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
