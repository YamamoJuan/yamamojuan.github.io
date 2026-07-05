import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Go CLI Simulator',
    description: 'Web-based terminal simulator untuk menjalankan Go code di browser. Built with Go backend dan vanilla HTML/CSS/JS frontend. Fitur: gonano text editor, command history, keyboard shortcuts.',
    tags: ['Go', 'HTML/CSS/JS', 'Terminal'],
    live: 'https://gocli-simulator.vercel.app',
    repo: 'https://github.com/YamamoJuan/gocli-simulator',
    preview: '/image/preview-gocli.svg',
  },
  {
    title: 'FileDrop',
    description: 'Platform sharing file sementara dengan drag & drop upload. Menggunakan Next.js dan Supabase untuk storage dan file management.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    live: 'https://sharingfilesementara.vercel.app',
    repo: 'https://github.com/YamamoJuan/filedrop',
    preview: '/image/preview-filedrop.svg',
  },
  {
    title: 'QR Absensi',
    description: 'Sistem absensi berbasis QR code. Scan QR untuk melakukan presensi, dibangun dengan Node.js backend dan Supabase database.',
    tags: ['Node.js', 'Supabase', 'QR Code'],
    live: 'https://absenpakaiqr.vercel.app',
    repo: 'https://github.com/YamamoJuan/qr-absensi',
    preview: '/image/preview-qrabsensi.svg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-accent/10 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card overflow-hidden flex flex-col group hover:border-accent/40 transition-all duration-300 cursor-pointer"
            >
              {/* Preview image */}
              <div className="relative overflow-hidden border-b border-accent/10">
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono text-white font-semibold text-sm group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                      title="GitHub Repo"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                      title="Live Demo"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-accent/60 bg-accent/5 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
