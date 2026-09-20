import { motion } from 'framer-motion';
import { Github, FileText, ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-36 pb-20 md:pt-48 md:pb-32 max-w-5xl mx-auto px-6"
    >
      <div className="space-y-12">
        {/* Top Tagline / Real Academic Identity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400 uppercase tracking-wider"
        >
          <span className="inline-flex items-center gap-2 text-amber-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            IT Engineering Student
          </span>
          <span className="text-zinc-600">/</span>
          <span>VCET · Univ. of Mumbai</span>
          <span className="text-zinc-600">/</span>
          <span>Graduating 2027</span>
        </motion.div>

        {/* Oversized Editorial Name & Headline */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.95]"
          >
            SAMEER <br />
            <span className="text-zinc-500 hover:text-white transition-colors duration-500">
              ARJUN.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 max-w-3xl leading-snug"
          >
            Final-year IT student building full-stack web applications and AI/ML solutions.
          </motion.p>
        </div>

        {/* Narrative & Context Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-12 gap-8 pt-4 border-t border-zinc-850"
        >
          {/* Statement */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              I am a Final-year Information Technology engineering student with hands-on experience building full-stack web applications and AI/ML solutions. Proficient in <strong className="text-white font-medium">Java, Python, JavaScript, React, FastAPI, SQL, and MongoDB</strong>. Built and deployed <strong className="text-white font-medium">Orbit</strong> (a Next.js & PostgreSQL productivity platform) and <strong className="text-white font-medium">Fake Job Detection</strong> (an AI-powered Bi-LSTM scam classifier). Seeking an entry-level software engineering role to build reliable, user-focused applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="projects"
                smooth={true}
                duration={450}
                offset={-80}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-mono text-xs uppercase tracking-wider transition-all"
              >
                <FileText size={14} className="text-amber-400" />
                <span>View Resume (PDF)</span>
              </a>

              <a
                href="https://github.com/sam123-arjun"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-mono text-xs uppercase tracking-wider transition-all"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Current Focus List */}
          <div className="md:col-span-5 bg-[#121316] border border-zinc-800/80 rounded-xl p-5 space-y-4">
            <div className="font-mono text-[11px] font-semibold text-zinc-400 uppercase tracking-widest pb-2 border-b border-zinc-800">
              Core Technical Competencies
            </div>

            <ul className="space-y-3 font-mono text-xs">
              <li className="flex items-start gap-2.5 text-zinc-300">
                <span className="text-amber-400 font-bold">01</span>
                <span>Full-Stack Web (Next.js · React · Node · FastAPI)</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <span className="text-amber-400 font-bold">02</span>
                <span>AI / ML & NLP (TensorFlow · Bi-LSTM · NLP Models)</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <span className="text-amber-400 font-bold">03</span>
                <span>Databases & Logic (PostgreSQL · MongoDB · SQL · Java)</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


