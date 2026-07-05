import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Aspiring Security Analyst';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Background grid effect */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Terminal prompt */}
        <p className="font-mono text-accent/60 text-sm mb-4">
          <span className="text-accent">root@yamamojuan</span>
          <span className="text-gray-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-500">$</span>
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-4">
          Yamamo<span className="text-accent">Juan</span>
        </h1>

        {/* Typing effect headline */}
        <div className="h-10 mb-8">
          <p className="font-mono text-lg md:text-xl text-accent">
            {displayText}
            <span className="animate-blink">_</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Passionate about cybersecurity, network defense, and breaking things
          to understand how they work. Always learning, always exploring.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent/10 border border-accent/30 text-accent font-mono text-sm rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all"
          >
            {'>'} view_projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 text-gray-400 font-mono text-sm rounded-lg hover:border-accent/30 hover:text-accent transition-all"
          >
            {'>'} get_in_touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" className="text-accent/40 hover:text-accent transition-colors">
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        </a>
      </div>
    </section>
  );
}
