import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Code2, Rocket } from 'lucide-react';

const About = () => {
    const qualities = [
      {
        icon: <Target className="w-8 h-8 text-primary-500" />,
        title: "Career Objective",
        desc: "Aiming to build scalable AI/ML solutions and backend systems that solve real-world problems."
      },
      {
        icon: <Lightbulb className="w-8 h-8 text-primary-500" />,
        title: "Innovation Focused",
        desc: "Passionate about research and applying latest technologies to modernize existing systems."
      },
      {
        icon: <Code2 className="w-8 h-8 text-primary-500" />,
        title: "Technical Excellence",
        desc: "Dedicated to writing clean, efficient, and well-documented code with a focus on performance."
      }
    ];

    return (
      <section id="about" className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-30 -mr-24 -mt-24 pointer-events-none"></div>

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About Me</h2>
            <div className="title-underline"></div>
            <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
              I am a passionate developer interested in Artificial Intelligence, Flask web development and building practical software projects. I enjoy learning modern technologies and solving real world problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 transition-all group hover:shadow-xl hover:shadow-primary-100/50"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default About;
