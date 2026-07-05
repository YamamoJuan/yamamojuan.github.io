import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faTerminal } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e0d]/90 backdrop-blur-md border-b border-accent/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-accent font-mono font-bold text-lg hover:opacity-80 transition">
          <FontAwesomeIcon icon={faTerminal} />
          <span>yamamojuan</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-mono text-gray-400 hover:text-accent transition-colors"
            >
              <span className="text-accent/50 mr-1">$</span>
              {link.label.toLowerCase()}
            </a>
          ))}
          <Link
            href="/tools"
            className="text-sm font-mono text-gray-400 hover:text-accent transition-colors"
          >
            <span className="text-accent/50 mr-1">$</span>tools
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent text-xl"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0e0d]/95 backdrop-blur-md border-t border-accent/10 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-mono text-gray-400 hover:text-accent transition-colors"
            >
              <span className="text-accent/50 mr-1">$</span>
              {link.label.toLowerCase()}
            </a>
          ))}
          <Link
            href="/tools"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-mono text-gray-400 hover:text-accent transition-colors"
          >
            <span className="text-accent/50 mr-1">$</span>tools
          </Link>
        </div>
      )}
    </nav>
  );
}
