import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageBackground } from '../components/PageBackground';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    budget: 'Flexible',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your project details';
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          // Get your own free access key at https://web3forms.com (instant, no signup, just verify your email)
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `New Portfolio Enquiry from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } else {
        setErrors({
          submit: 'Message could not be sent. Please email directly at fartiyalneha82@gmail.com.',
        });
      }
    } catch {
      setErrors({
        submit: 'Network error — please email directly at fartiyalneha82@gmail.com.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <PageBackground pageId="contact">
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 mt-3 tracking-tight">
              Let's Build Something Great.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              Have a website project in mind? Tell me about it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-6 rounded-3xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300 space-y-6">
                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">Contact Information</h3>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:fartiyalneha82@gmail.com"
                    className="p-4 rounded-2xl bg-slate-900 border border-white/5 hover:border-emerald-500/30 flex items-center gap-4 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Email Direct</p>
                      <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        fartiyalneha82@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919084488956"
                    className="p-4 rounded-2xl bg-slate-900 border border-white/5 hover:border-teal-500/30 flex items-center gap-4 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Phone / Call</p>
                      <p className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                        +91-9084488956
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919084488956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-900 border border-white/5 hover:border-emerald-500/30 flex items-center gap-4 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">WhatsApp Direct</p>
                      <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        +91-9084488956 (Chat)
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-white/5 hover:border-amber-500/30 flex items-center gap-4 transition-all group">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-400 font-bold">Based In</p>
                      <p className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        Dehradun, Uttarakhand, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-xs font-mono uppercase text-slate-400 font-bold">Social Profiles</p>

                  <div className="flex gap-3">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/neha-fartiyal-364a52332"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-emerald-400 flex items-center gap-2 text-xs font-mono transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-emerald-400" />
                      <span>LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/NehaFartiyal03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400 flex items-center gap-2 text-xs font-mono transition-colors"
                    >
                      <Github className="w-4 h-4 text-teal-400" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="p-8 rounded-3xl glass-panel border border-white/10 dark:border-white/10 light:border-slate-300">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="py-12 text-center space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">Message Received!</h3>
                    <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-md mx-auto">
                      Thank you for reaching out, {formData.name}. I have received your message regarding your {formData.projectType} and will get back to you promptly at {formData.email}.
                    </p>
                    <motion.button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', projectType: 'Business Website', budget: 'Flexible', message: '' });
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">Send a Direct Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.name ? 'border-red-500' : 'border-white/10 focus:border-emerald-500'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500' : 'border-white/10 focus:border-emerald-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Project Type */}
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                          <option value="Business Website">Business Website</option>
                          <option value="NGO / Organization Site">NGO / Organization Site</option>
                          <option value="Company Portal">Company Portal</option>
                          <option value="Landing Page">Landing Page</option>
                          <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                          <option value="Website Redesign">Website Redesign</option>
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">
                          Budget Expectation
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                          <option value="Flexible">Flexible / Discuss</option>
                          <option value="Standard Website">Standard Website</option>
                          <option value="Custom Application">Custom Application</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase font-bold mb-1.5">
                        Project Description *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your website idea, required pages, or features..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.message ? 'border-red-500' : 'border-white/10 focus:border-emerald-500'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit-level error (network / service failure) */}
                    {errors.submit && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-300">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errors.submit}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSending}
                      whileHover={{ scale: isSending ? 1 : 1.02, y: isSending ? 0 : -2 }}
                      whileTap={{ scale: isSending ? 1 : 0.97 }}
                      className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/25 transition-shadow flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
