import { motion } from 'framer-motion';
import { Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Information Technology Engineering',
      institution: 'Vidyavardhini’s College of Engineering & Technology (VCET), Vasai',
      university: 'University of Mumbai',
      period: 'Expected Graduation: 2027',
      type: 'Undergraduate Degree',
      status: 'Final-Year Student',
      current: true,
      metrics: 'CGPA: 7.51 · SGPI: 8.14 (Semester VI)',
      description: 'Undergraduate engineering studies focusing on computer software systems, algorithmic problem-solving, full-stack web applications, database architectures, and applied machine learning.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java)',
        'Database Management Systems (MySQL / MongoDB)',
        'Web Technologies & REST APIs',
        'Machine Learning & Artificial Intelligence',
        'Natural Language Processing & Neural Networks'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Maharashtra State Board',
      university: 'Science Stream',
      period: 'Completed',
      type: 'Higher Secondary Education',
      status: 'Completed',
      current: false,
      metrics: 'Distinction in Science & Mathematics',
      description: 'Science stream with intensive preparation in Advanced Mathematics, Physics, Chemistry, and fundamental Computer Logic.',
      coursework: [
        'Mathematics & Calculus',
        'Physics & Electronics',
        'Introductory Programming & Logic'
      ]
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Maharashtra State Board',
      university: 'General Curriculum',
      period: 'Completed',
      type: 'Secondary Education',
      status: 'Completed',
      current: false,
      metrics: 'Distinction',
      description: 'Secondary education emphasizing quantitative reasoning, fundamental science, and computer literacy.',
      coursework: [
        'Foundational Sciences & Mathematics',
        'Basic Computer Literacy'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding border-t border-zinc-850">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="section-tag">04 // Academic Timeline</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundations in Information Technology, algorithmic problem solving, and software engineering principles.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6 max-w-4xl">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`editorial-card p-6 sm:p-8 space-y-5 transition-all ${
                item.current ? 'border-amber-500/40 shadow-amber-500/5 ring-1 ring-amber-500/20' : ''
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-zinc-800">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
                      {item.type}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {item.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300">
                    <span className="font-medium text-zinc-200">{item.institution}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-400">{item.university}</span>
                  </div>
                  {item.metrics && (
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-xs text-amber-400 font-semibold">
                        {item.metrics}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 self-start shrink-0">
                  <Calendar size={13} className="text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Coursework & Focus Areas */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400">
                  <BookOpen size={13} className="text-amber-400" />
                  <span>Relevant Coursework & Studies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-400/80" />
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
