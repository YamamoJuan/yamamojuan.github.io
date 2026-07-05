import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-accent/10 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Halo! Gua <span className="text-white font-medium">Juan</span>, ya
              mahasiswa biasa yang seneng aja tentang{' '}
              <span className="text-accent">cybersecurity</span>.
            </p>
            <p>
              Gua tertarik dengan gimana cara attacker/hacker itu berpikir,
              gimana suatu sistem itu bisa di-exploit, dan gimana juga cara buat
              pertahanan yang kuat buat itu semua.
            </p>
            <p>
              Di luar itu, gua juga hobi buat <span className="text-white">vibe coding</span> dan
              lagi belajar juga tentang <span className="text-white">AI agents</span>!
            </p>
          </div>

          {/* Interest cards */}
          <div className="space-y-4">
            {[
              {
                title: 'Security Analysis',
                desc: 'Menganalisis vulnerability dan threat untuk membangun pertahanan yang lebih baik.',
              },
              {
                title: 'Penetration Testing',
                desc: 'Menguji sistem secara ethical untuk menemukan celah sebelum disalahgunakan.',
              },
              {
                title: 'AI & Automation',
                desc: 'Belajar AI agents dan automasi buat bikin workflow yang lebih efisien.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-4 flex gap-4 items-start">
                <div className="text-accent font-mono text-sm mt-0.5">
                  &gt;
                </div>
                <div>
                  <h3 className="font-mono text-white font-semibold text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
