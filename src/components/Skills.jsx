import { Terminal, Layout, Server, Database, Cpu, Wrench, Award, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      domain: 'Languages',
      icon: <Terminal size={17} className="text-amber-400" />,
      items: ['Java', 'Python', 'JavaScript', 'C']
    },
    {
      domain: 'Frontend',
      icon: <Layout size={17} className="text-amber-400" />,
      items: ['HTML', 'CSS', 'React']
    },
    {
      domain: 'Backend',
      icon: <Server size={17} className="text-amber-400" />,
      items: ['Node.js', 'FastAPI', 'REST APIs']
    },
    {
      domain: 'Databases',
      icon: <Database size={17} className="text-amber-400" />,
      items: ['MySQL', 'MongoDB']
    },
    {
      domain: 'AI / ML',
      icon: <Cpu size={17} className="text-amber-400" />,
      items: ['NLP', 'BiLSTM', 'TensorFlow']
    },
    {
      domain: 'Tools',
      icon: <Wrench size={17} className="text-amber-400" />,
      items: ['Git', 'GitHub', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="section-padding border-t border-zinc-850">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="section-tag">03 // Technical Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I have actively used across my projects, coursework, and personal builds.
          </p>
        </div>

        {/* Editorial Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.domain}
              className="editorial-card p-6 space-y-4 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  {group.icon}
                  <h3 className="font-display font-bold text-white text-base">
                    {group.domain}
                  </h3>
                </div>
                <span className="font-mono text-xs text-zinc-400 font-semibold">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-zinc-900/90 text-zinc-200 border border-zinc-800 hover:border-amber-400/40 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="editorial-card p-6 sm:p-7 border border-zinc-800/90 bg-gradient-to-r from-zinc-950 via-[#121316] to-zinc-950 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 shrink-0">
              <Award size={24} />
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Verified Certification
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                HackerRank — SQL Certification
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Demonstrated proficiency across complex joins, subqueries, aggregation, window functions, and relational schema optimization.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              <CheckCircle size={13} className="text-emerald-400" />
              Basic
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              <CheckCircle size={13} className="text-emerald-400" />
              Intermediate
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-amber-400/30 text-amber-300 font-semibold">
              <CheckCircle size={13} className="text-amber-400" />
              Advanced
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


