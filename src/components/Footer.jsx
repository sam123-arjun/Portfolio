import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
      <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -mr-24 -mb-24"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 border-b border-white/10 pb-20">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Let's Build Something <span className="text-primary-400 font-serif italic font-medium">Extraordinary</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md">
                Combining technical excellence with creative problem solving to deliver top-tier software.
              </p>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sameer@example.com" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-slate-500 text-sm font-medium tracking-wide">
              © 2026 SAMEER ARJUN. ALL RIGHTS RESERVED.
            </div>

            <div className="flex gap-8 text-slate-400 text-sm font-semibold tracking-widest uppercase">
              <Link to="about" smooth={true} duration={500} className="hover:text-primary-400 cursor-pointer">About</Link>
              <Link to="projects" smooth={true} duration={500} className="hover:text-primary-400 cursor-pointer">Projects</Link>
              <Link to="contact" smooth={true} duration={500} className="hover:text-primary-400 cursor-pointer">Contact</Link>
            </div>

            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="bg-primary-600 p-4 rounded-2xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-900/40 cursor-pointer group"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
