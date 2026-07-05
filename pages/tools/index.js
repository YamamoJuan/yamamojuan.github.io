import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faWrench } from '@fortawesome/free-solid-svg-icons';

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>Tools | YamamoJuan</title>
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-accent/20 bg-accent/5 mb-8">
            <FontAwesomeIcon icon={faWrench} className="text-accent text-3xl" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
            Tools
          </h1>

          {/* Coming soon message */}
          <div className="glass-card p-6 mb-8">
            <p className="font-mono text-accent text-sm mb-2">
              <span className="text-accent/40">$</span> status --check tools
            </p>
            <p className="text-xl font-mono text-accent animate-glow">
              Available Soon
            </p>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Tool-tool keren sedang disiapkan. Stay tuned!
            </p>
          </div>

          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            back to home
          </Link>
        </div>
      </div>
    </>
  );
}
