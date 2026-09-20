import { useState } from 'react';
import { Github, ExternalLink, ArrowRight, BookOpen, CheckCircle2, ShieldAlert, CheckSquare } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'orbit',
      index: '01',
      title: 'ORBIT',
      tagline: 'Full-Stack Productivity Platform with Natural Language & Local-First Sync',
      category: 'Full-Stack Web App',
      desc: 'Built and deployed a productivity platform with task management, Kanban, habit tracking, Pomodoro, and analytics. Implemented natural-language task creation and local-first storage with PostgreSQL cloud synchronization. Added Google OAuth, email/password authentication, drag-and-drop workflows, and automated testing.',
      tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Google OAuth'],
      github: 'https://github.com/sam123-arjun/Portfolio',
      demo: null,
      type: 'interactive-task',
      caseStudy: {
        problem: 'Most task management tools lack flexible organization (Kanban, habits, Pomodoro) or require constant cloud connectivity that introduces latency and breaks flow state.',
        idea: 'Build an all-in-one productivity suite featuring natural-language task parsing, drag-and-drop Kanban, Pomodoro timer, and a local-first architecture syncing seamlessly to PostgreSQL.',
        build: `[Next.js & React UI Client]
     ↓ Natural Language Parser & Local-First Cache
[Prisma ORM Client]
     ↓ Type-Safe Queries & JWT / Google OAuth
[PostgreSQL Database // Cloud Synchronization]`,
        features: [
          'Natural-language task creation with automatic date and priority detection',
          'Interactive drag-and-drop Kanban boards, habit tracking, and Pomodoro analytics',
          'Local-first storage with real-time PostgreSQL cloud synchronization',
          'Google OAuth and email/password secure authentication flows',
          'Automated end-to-end and component test coverage'
        ],
        challenges: 'Architecting conflict-free local-first storage synchronization with PostgreSQL while preserving responsive drag-and-drop interactions across desktop and mobile.',
        result: 'A production-grade, highly responsive productivity platform with rich analytics and seamless multi-device state synchronization.'
      }
    },
    {
      id: 'fake-job-detection',
      index: '02',
      title: 'FAKE JOB DETECTION',
      tagline: 'AI-Powered Fraud Detection with Bi-LSTM, FastAPI & React',
      category: 'AI / Machine Learning & Full-Stack',
      desc: 'Built a Bi-LSTM NLP model to classify job postings as legitimate or fraudulent. Developed a FastAPI-based prediction system with text preprocessing, confidence scoring, and rule-based scam analysis. Integrated React, MongoDB, JWT authentication, prediction history, and Docker.',
      tech: ['Python', 'TensorFlow', 'Bi-LSTM', 'FastAPI', 'React', 'MongoDB', 'Docker', 'JWT'],
      github: 'https://github.com/sam123-arjun',
      demo: null,
      type: 'interactive-nlp',
      caseStudy: {
        problem: 'Online recruitment portals are overwhelmed by deceptive and scam job listings targeting vulnerable applicants, which traditional keyword filters fail to detect reliably.',
        idea: 'Develop an end-to-end AI fraud classification platform combining a Bidirectional LSTM neural network with a high-throughput FastAPI inference service and React dashboard.',
        build: `[Job Description Text Submission]
     ↓ FastAPI REST Endpoint & Text Preprocessing
[Bi-LSTM Deep NLP Model (TensorFlow)]
     ↓ Semantic Sequence Context & Confidence Scoring
[Rule-Based Scam Heuristics Engine]
     ↓ MongoDB History Logging & JWT Auth
[React Dashboard // Prediction Breakdown]`,
        features: [
          'Bidirectional LSTM deep learning model trained on semantic job advertisement structures',
          'FastAPI asynchronous prediction backend with real-time text preprocessing',
          'Dual evaluation: neural confidence score paired with rule-based scam analysis',
          'User accounts with JWT authentication, MongoDB prediction history, and analytics',
          'Containerized deployment using Docker for seamless reproducibility'
        ],
        challenges: 'Balancing model latency with classification accuracy on long text inputs by optimizing embedding dimensions and deploying inference through asynchronous FastAPI worker processes.',
        result: 'A complete, containerized fraud detection pipeline capable of providing instant confidence scoring and scam indicator breakdowns.'
      }
    }
  ];

  return (
    <section id="projects" className="section-padding border-t border-zinc-850">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="section-tag">01 // Selected Work</span>
          <h2 className="section-title">Built Projects</h2>
          <p className="section-subtitle">
            Full-stack software systems and machine-learning solutions built and deployed.
          </p>
        </div>

        {/* Editorial Project Showcase */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="editorial-card editorial-card-hover p-6 sm:p-9 lg:p-10 transition-all space-y-8"
            >
              {/* Project Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-zinc-800/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-amber-400">
                      PROJECT {project.index}
                    </span>
                    <span className="text-zinc-600 font-mono">/</span>
                    <span className="font-mono text-xs uppercase text-zinc-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight pt-1">
                    {project.title}
                  </h3>
                </div>

                <p className="font-mono text-xs text-zinc-400 max-w-sm sm:text-right">
                  {project.tagline}
                </p>
              </div>

              {/* Grid: Description & Visual */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left: Project Details & CTAs */}
                <div className="lg:col-span-6 space-y-6">
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Core Features Preview */}
                  <div className="space-y-2.5 pt-1">
                    <div className="font-mono text-xs uppercase text-zinc-400 tracking-wider">
                      Key Highlights
                    </div>
                    <ul className="space-y-2">
                      {project.caseStudy.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                          <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-xs uppercase text-zinc-400 tracking-wider">
                      Built With
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <BookOpen size={14} />
                      <span>Case Study</span>
                      <ArrowRight size={13} />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 font-mono text-xs uppercase tracking-wider transition-all"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-mono text-xs uppercase tracking-wider transition-all"
                      >
                        <span>Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Authentic Project Visual Component Preview */}
                <div className="lg:col-span-6">
                  {project.id === 'orbit' ? (
                    <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-5 space-y-4 font-mono shadow-2xl">
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-850 text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                          <span className="ml-2 text-zinc-300 font-semibold">orbit // kanban_sync</span>
                        </div>
                        <span className="text-[10px] text-amber-400">NEXT.JS · POSTGRESQL</span>
                      </div>

                      {/* Mock Task Architecture Representation */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#141518] border border-zinc-800/80">
                          <div className="flex items-center gap-2.5">
                            <CheckSquare size={16} className="text-amber-400" />
                            <span className="text-xs text-zinc-200">Natural-language task parser</span>
                          </div>
                          <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                            PRISMA SYNC
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#141518] border border-zinc-800/80">
                          <div className="flex items-center gap-2.5">
                            <CheckSquare size={16} className="text-emerald-400" />
                            <span className="text-xs text-zinc-200">Pomodoro & habit tracking analytics</span>
                          </div>
                          <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                            COMPLETED
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#141518] border border-zinc-800/80">
                          <div className="flex items-center gap-2.5">
                            <CheckSquare size={16} className="text-zinc-500" />
                            <span className="text-xs text-zinc-400">Google OAuth & local-first storage</span>
                          </div>
                          <span className="text-[10px] uppercase font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                            ACTIVE
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 text-[11px] text-zinc-400 flex items-center justify-between border-t border-zinc-850">
                        <span>STACK: NEXT.JS · TYPESCRIPT · PRISMA</span>
                        <span className="text-amber-400">POSTGRESQL</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-5 space-y-4 font-mono shadow-2xl">
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-850 text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                          <span className="ml-2 text-zinc-300 font-semibold">fastapi_bilstm_service.py</span>
                        </div>
                        <span className="text-[10px] text-emerald-400">DOCKER ACTIVE</span>
                      </div>

                      {/* Mock NLP Pipeline Diagram */}
                      <div className="p-3.5 rounded-lg bg-[#141518] border border-zinc-800 space-y-2.5 text-xs text-zinc-300">
                        <div className="text-[11px] text-zinc-400">
                          POST /api/v1/predict/job-posting
                        </div>
                        <div className="p-2 rounded bg-zinc-950 text-amber-400/90 text-[11px] border border-zinc-800/80">
                          [Text Preprocess] → [TensorFlow Bi-LSTM Model] → [Rule-Based Analysis]
                        </div>
                        <div className="flex items-center justify-between pt-1 text-xs">
                          <span className="text-rose-400 flex items-center gap-1.5 font-bold">
                            <ShieldAlert size={14} />
                            <span>CONFIDENCE SCORE: 98.4% SCAM</span>
                          </span>
                          <span className="text-zinc-400 font-mono text-[11px]">JWT Auth · MongoDB</span>
                        </div>
                      </div>

                      <div className="pt-2 text-[11px] text-zinc-400 flex items-center justify-between border-t border-zinc-850">
                        <span>BACKEND: FASTAPI · TENSORFLOW</span>
                        <span className="text-zinc-400">REACT UI</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;


