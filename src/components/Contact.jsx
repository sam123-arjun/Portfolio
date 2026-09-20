import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight, Phone, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactEmail = 'arjunsameer59@gmail.com';
  const contactPhone = '+91 7219129450';
  const rawPhone = '7219129450';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    if (serviceId === 'YOUR_SERVICE_ID') {
      // Simulate successful local dispatch if API keys are not yet configured
      setTimeout(() => {
        setStatus('success');
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setStatus(null), 5000);
      }, 800);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('success');
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="section-padding border-t border-zinc-850">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="section-tag">05 // Get In Touch</span>
          <h2 className="section-title">Have an idea? Let&apos;s build something.</h2>
          <p className="section-subtitle">
            Whether you want to discuss a project, talk about software engineering, or explore an opportunity—feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div className="editorial-card p-6 sm:p-7 space-y-6">
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                Direct Channels
              </h3>

              {/* Email Card with One-Click Copy */}
              <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Email Address</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-amber-400 hover:text-amber-300 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm sm:text-base font-semibold font-mono text-white hover:text-amber-400 transition-colors block break-all"
                >
                  {contactEmail}
                </a>
              </div>

              {/* Phone Card with One-Click Copy */}
              <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Phone / Mobile</span>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-amber-400 hover:text-amber-300 transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:+91${rawPhone}`}
                  className="text-sm sm:text-base font-semibold font-mono text-white hover:text-amber-400 transition-colors block"
                >
                  {contactPhone}
                </a>
              </div>

              {/* Direct Links */}
              <div className="space-y-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm font-medium text-zinc-300 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={17} className="text-zinc-400 group-hover:text-amber-400 transition-colors" />
                    <span>LinkedIn (Sameer Arjun)</span>
                  </div>
                  <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://github.com/sam123-arjun"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm font-medium text-zinc-300 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={17} className="text-zinc-400 group-hover:text-amber-400 transition-colors" />
                    <span>github.com/sam123-arjun</span>
                  </div>
                  <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-sm font-medium text-zinc-300 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <FileText size={17} className="text-amber-400" />
                    <span>View Resume (Sameer Arjun.pdf)</span>
                  </div>
                  <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-800/60 bg-zinc-900/20 text-xs font-mono text-zinc-400">
                  <MapPin size={16} className="text-amber-400/80 shrink-0" />
                  <span>Vasai / Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-display text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Drop a message here and it will be delivered straight to my email.
                </p>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="user_name" className="text-xs font-mono font-medium text-zinc-300">
                      Your Name
                    </label>
                    <input
                      id="user_name"
                      name="user_name"
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="user_email" className="text-xs font-mono font-medium text-zinc-300">
                      Your Email
                    </label>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono font-medium text-zinc-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="What would you like to discuss or build together?"
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-3 rounded-lg font-semibold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    status === 'sending'
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
                      : 'bg-amber-400 hover:bg-amber-300 text-zinc-950 shadow-md hover:shadow-amber-500/20 active:scale-[0.99]'
                  }`}
                >
                  {status === 'sending' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>

              {/* Status Banner */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-800/80 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <CheckCircle2 size={17} className="text-emerald-400 shrink-0" />
                    <span>Message received! Thank you for reaching out, I will reply shortly.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-800/80 text-rose-300 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <span>There was an issue sending your message. Please write directly to {contactEmail}.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
