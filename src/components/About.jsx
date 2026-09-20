import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

const About = () => {
  const focuses = [
    {
      index: '01',
      icon: <Terminal size={16} className="text-amber-400" />,
      title: 'Full-Stack Engineering',
      desc: 'Building modern interfaces in React & Next.js, and architecting robust backends with Node.js, FastAPI, PostgreSQL, and MongoDB.'
    },
    {
      index: '02',
      icon: <Cpu size={16} className="text-amber-400" />,
      title: 'Applied AI & NLP Models',
      desc: 'Developing automated prediction systems using NLP, Bi-LSTM neural networks, and TensorFlow for fraud detection and classification.'
    },
    {
      index: '03',
      icon: <Code2 size={16} className="text-amber-400" />,
      title: 'Core Foundations & Logic',
      desc: 'Object-oriented programming, data structures, and algorithmic problem solving in Java, Python, and SQL.'
    }
  ];

  const spokenLanguages = [
    { name: 'Marathi', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'English', level: 'Professional working proficiency' }
  ];

  return (
    <section id="about" className="section-padding border-t border-zinc-850">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="section-tag">02 // Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Engineering background, technical mindset, and commitment to building reliable software.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Authentic Narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Final-year <strong className="text-white font-medium">Information Technology engineering student</strong> at Vidyavardhini’s College of Engineering & Technology (University of Mumbai) with hands-on experience building full-stack web applications and AI/ML solutions.
            </p>
            <p>
              Proficient in <strong className="text-white font-medium">Java, Python, JavaScript, React, FastAPI, SQL, and MongoDB</strong>, with practical experience in REST APIs, authentication, NLP, and Bi-LSTM models. I have built and deployed projects including <strong className="text-white font-medium">Orbit</strong>, a full-stack productivity platform, and <strong className="text-white font-medium">Fake Job Detection</strong>, an AI-powered fraud classification system.
            </p>
            <p>
              Seeking an entry-level software engineering role where I can apply strong problem-solving and development skills in building reliable, user-focused applications.
            </p>

            {/* Spoken Languages */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                <Globe size={13} className="text-amber-400" />
                <span>Spoken Languages</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {spokenLanguages.map((lang) => (
                  <span
                    key={lang.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300"
                  >
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-zinc-500">·</span>
                    <span className="text-amber-400/90 text-[11px]">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 font-mono text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Open to software engineering roles & technical discussions</span>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-5 space-y-3">
            {focuses.map((f) => (
              <div
                key={f.index}
                className="editorial-card p-5 space-y-2 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center justify-between pb-1 border-b border-zinc-800/60">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    {f.icon}
                    <span>{f.title}</span>
                  </div>
                  <span className="font-mono text-xs text-amber-400 font-bold">
                    {f.index}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


