import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>YamamoJuan | Aspiring Security Analyst</title>
        <meta name="description" content="Portfolio of YamamoJuan - Aspiring Security Analyst & Cybersecurity Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <div className="section-divider max-w-4xl mx-auto" />
        <About />
        <div className="section-divider max-w-4xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-4xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-4xl mx-auto" />
        <Contact />
      </div>
    </>
  );
}
