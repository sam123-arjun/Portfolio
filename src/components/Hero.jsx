import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-600 font-semibold tracking-wider mb-2"
          >
            WELCOME TO MY WORLD
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
          >
            Hi, I'm <span className="text-primary-600">Sameer Arjun</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-lg"
          >
            A passionate <span className="text-slate-900 font-semibold underline decoration-primary-500/30 underline-offset-4">Python Developer</span> & AI Student dedicated to building innovative software solutions.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3.5 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 flex items-center gap-2 group cursor-pointer"
            >
              Get In Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:border-primary-500 hover:text-primary-600 transition-all flex items-center gap-2 group shadow-sm hover:shadow-md"
            >
              Resume
              <FileText size={20} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 text-slate-400"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sameer@example.com" className="hover:text-primary-600 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative group">
            {/* Background Blob/Circle */}
            <div className="absolute -inset-4 bg-primary-200/50 rounded-full blur-2xl group-hover:bg-primary-300/50 transition-colors"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl shadow-primary-100 border-8 border-white group-hover:rotate-2 transition-transform duration-500">
              <img
                src={profileImg}
                alt="Sameer Arjun"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 glass p-4 rounded-xl shadow-lg border-white/40 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span className="font-semibold text-slate-800">Available for Hire</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
