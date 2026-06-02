import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Brain, LayoutGrid, List } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'AI/ML', 'Web', 'Mobile'];

    const projects = [
      {
        title: "WellNest Wellness Tracker",
        category: "AI/ML",
        image: "https://images.unsplash.com/photo-1576091160550-217359991f1c?w=800&auto=format&fit=crop&q=60",
        desc: "AI-powered wellness tracker with smart habit suggestions and health analytics.",
        tech: ["Python", "Flask", "TensorFlow", "React"],
        github: "#",
        demo: "#"
      },
      {
        title: "Crude Oil Price Prediction",
        category: "AI/ML",
        image: "https://images.unsplash.com/photo-1611273236450-136195863261?w=800&auto=format&fit=crop&q=60",
        desc: "Forecasting crude oil prices using a hybrid GAN + LSTM architecture with 94% accuracy.",
        tech: ["Python", "Keras", "NumPy", "Pandas"],
        github: "#",
        demo: "#"
      },
      {
        title: "CareerConnect Job Portal",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
        desc: "Full-featured job portal with job matching and integrated chat systems.",
        tech: ["Flutter", "Firebase", "Dart"],
        github: "#",
        demo: "#"
      },
      {
        title: "Professional React Portfolio",
        category: "Web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        desc: "Ultra-modern developer portfolio with high-performance animations and glassmorphism.",
        tech: ["React", "Tailwind", "Framer Motion", "Vite"],
        github: "#",
        demo: "#"
      }
    ];

    const filteredProjects = filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter);

    return (
      <section id="projects" className="section-padding bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 -ml-20 -mb-20"></div>

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Projects</h2>
            <div className="title-underline"></div>
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
              A selection of my best work, ranging from AI research to full-stack web applications.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat ? 'bg-primary-600 text-white shadow-lg shadow-primary-200' : 'bg-white text-slate-600 hover:text-primary-600 border border-slate-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group glass rounded-[2.5rem] overflow-hidden border border-white relative"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                      <a href={project.github} className="bg-white p-3 rounded-full text-primary-600 hover:bg-primary-50 transition-colors shadow-lg">
                        <Github size={24} />
                      </a>
                      <a href={project.demo} className="bg-white p-3 rounded-full text-primary-600 hover:bg-primary-50 transition-colors shadow-lg">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200 group-hover:bg-white transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-16">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-bold text-lg hover:underline underline-offset-8">
              View More on GitHub
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    );
};

export default Projects;
