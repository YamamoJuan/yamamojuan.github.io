import React from 'react';

const skillCategories = [
  {
    title: 'Security Tools',
    skills: [
      { name: 'Wireshark', level: 20 },
      { name: 'Nmap', level: 15 },
      { name: 'Burp Suite', level: 15 },
      { name: 'Metasploit', level: 10 },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Golang', level: 60 },
      { name: 'Python', level: 55 },
      { name: 'JavaScript', level: 50 },
      { name: 'Bash', level: 45 },
    ],
  },
  {
    title: 'Systems & Networks',
    skills: [
      { name: 'Linux', level: 60 },
      { name: 'Networking', level: 45 },
      { name: 'Git', level: 50 },
      { name: 'Next.js', level: 45 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-white">Skills</h2>
          <div className="flex-1 h-px bg-accent/10 ml-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-mono text-accent text-sm mb-6">
                <span className="text-accent/40">#</span> {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300 font-mono">{skill.name}</span>
                      <span className="text-xs text-gray-600 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent/60 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-600 text-xs font-mono mt-10">
          <span className="text-accent/40">*</span> Skill levels are self-assessed and continuously improving.
        </p>
      </div>
    </section>
  );
}
