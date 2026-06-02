import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Database, ChevronRight, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 75 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      skills: [
        { name: "Flask", level: 85 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Deep Learning", level: 75 },
        { name: "NLP", level: 70 }
      ]
    },
    {
      title: "Backend & DevTools",
      icon: <Database className="w-6 h-6 text-orange-500" />,
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "Docker", level: 60 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Technical Skills</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group hover:shadow-2xl hover:shadow-primary-100/50 transition-all border-slate-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-primary-50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-primary-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
