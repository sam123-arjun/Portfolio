import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const educationData = [
      {
        degree: "Bachelor Computer Science",
        institution: "Your College Name",
        period: "2022 – 2025",
        description: "Focus on AI and software engineering.",
        active: true
      },
      {
        degree: "Higher Secondary",
        institution: "Your College",
        period: "2020 – 2022",
        description: "Science Stream.",
        active: false
      },
      {
        degree: "Secondary School",
        institution: "Your School",
        period: "2019 – 2020",
        description: "General Studies.",
        active: false
      }
    ];

    return (
      <section id="education" className="section-padding bg-slate-50 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Education</h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* Timeline UI */}
          <div className="relative space-y-12">
            {/* Center Line */}
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-slate-200 hidden md:block"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center justify-between w-full p-4 md:p-6 mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Empty spacer for desktop */}
                <div className="hidden md:block w-5/12"></div>

                {/* Vertical Line Linker Dot */}
                <div className="absolute left-1/2 -ml-4 w-8 h-8 rounded-full bg-white border-4 border-primary-500 z-10 hidden md:block group"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 glass p-8 rounded-3xl transition-transform hover:scale-[1.02] ${item.active ? 'border-primary-200 ring-2 ring-primary-50 ring-offset-2' : ''}`}>
                  <div className="flex items-center gap-2 text-primary-600 mb-2">
                    <GraduationCap size={20} />
                    <span className="font-semibold text-sm tracking-wide bg-primary-50 px-3 py-1 rounded-full uppercase">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-slate-600 mb-4 font-medium">
                    <MapPin size={18} className="text-slate-400" />
                    {item.institution}
                  </div>
                  <p className="text-slate-500 leading-relaxed italic">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Education;
