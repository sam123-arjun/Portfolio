import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, FileText, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Work', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-zinc-950 focus:rounded-md focus:shadow-lg font-mono text-xs font-bold"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          {/* Logo / Identity */}
          <Link
            to="hero"
            smooth={true}
            duration={400}
            className="group flex items-center gap-2.5 cursor-pointer"
          >
            <span className="font-display font-bold text-white tracking-tight text-base group-hover:text-amber-400 transition-colors">
              SAMEER ARJUN
            </span>
            <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 hidden sm:inline-block">
              IT Engineering
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={400}
                offset={-80}
                spy={true}
                activeClass="text-amber-400 font-semibold"
                className="font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Direct External Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/sam123-arjun"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight size={13} className="text-zinc-500" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-mono text-xs font-medium transition-all"
            >
              <FileText size={13} className="text-amber-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#111215] border-b border-zinc-800 px-6 py-5 shadow-2xl"
            >
              <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={400}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="font-mono text-sm uppercase tracking-wider text-zinc-300 hover:text-amber-400 py-1 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-zinc-800/80 flex items-center justify-between">
                  <a
                    href="https://github.com/sam123-arjun"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-zinc-400 hover:text-white"
                  >
                    <Github size={15} />
                    <span>GitHub ↗</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 text-zinc-300 text-xs font-mono"
                  >
                    <FileText size={13} className="text-amber-400" />
                    <span>Resume ↗</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;


