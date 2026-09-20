import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Code2, AlertCircle, ArrowUpRight } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-[#121316] text-zinc-100 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden my-8 max-h-[90vh] flex flex-col z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="p-6 sm:p-7 border-b border-zinc-800/80 flex items-start justify-between gap-4 bg-[#16171b]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-widest">
                    CASE STUDY // {project.index}
                  </span>
                </div>
                <h2 id="modal-title" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-400">
                  {project.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body: Problem -> Idea -> Build -> Key Features -> Tech -> Challenges -> Result */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-zinc-300 text-sm leading-relaxed">
              {/* The Problem & The Idea */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#17181c] border border-zinc-800/80 space-y-2">
                  <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    <span>The Problem</span>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#17181c] border border-zinc-800/80 space-y-2">
                  <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>The Idea</span>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {project.caseStudy.idea}
                  </p>
                </div>
              </div>

              {/* The Build & Architecture */}
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  The Build & Architecture
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 font-mono text-xs text-zinc-300 overflow-x-auto border border-zinc-800">
                  <pre className="whitespace-pre-wrap">{project.caseStudy.build}</pre>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Key Features
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.caseStudy.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 bg-[#16171b] p-3 rounded-lg border border-zinc-800/60">
                      <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges */}
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle size={14} className="text-amber-400" />
                  <span>Technical Challenges & Solutions</span>
                </div>
                <div className="p-4 rounded-xl bg-[#17181c] border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed">
                  {project.caseStudy.challenges}
                </div>
              </div>

              {/* Result */}
              <div className="space-y-2">
                <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Result
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 bg-[#16171b] p-4 rounded-xl border border-zinc-800/80">
                  {project.caseStudy.result}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Code2 size={14} className="text-amber-400" />
                  <span>Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 border-t border-zinc-800/80 bg-[#16171b] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800 transition-all"
                  >
                    <Github size={14} />
                    <span>View on GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-mono uppercase text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

