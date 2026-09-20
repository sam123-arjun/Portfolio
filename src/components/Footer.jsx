import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#090a0b] text-zinc-400 pt-16 pb-12 border-t border-zinc-850">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Top Tier: Identity & Direct Channels */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-zinc-850">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              SAMEER ARJUN <span className="text-amber-400 font-mono text-xs font-normal ml-2">{'// Developer & Builder'}</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              Final-year IT Engineering student at VCET (University of Mumbai) building full-stack web applications and AI/ML solutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sam123-arjun"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:arjunsameer59@gmail.com"
              aria-label="Send Email"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer Navigation">
            <Link to="projects" smooth={true} duration={400} offset={-80} className="hover:text-zinc-200 transition-colors cursor-pointer">
              Work
            </Link>
            <Link to="about" smooth={true} duration={400} offset={-80} className="hover:text-zinc-200 transition-colors cursor-pointer">
              About
            </Link>
            <Link to="skills" smooth={true} duration={400} offset={-80} className="hover:text-zinc-200 transition-colors cursor-pointer">
              Skills
            </Link>
            <Link to="education" smooth={true} duration={400} offset={-80} className="hover:text-zinc-200 transition-colors cursor-pointer">
              Education
            </Link>
            <Link to="contact" smooth={true} duration={400} offset={-80} className="hover:text-zinc-200 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-zinc-500">
              © {new Date().getFullYear()} Sameer Arjun. Built with React & Tailwind.
            </span>
            <Link
              to="hero"
              smooth={true}
              duration={450}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-zinc-700 transition-all cursor-pointer group"
            >
              <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
