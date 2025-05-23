import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const quotes = [
    '“I never miss.”<br/>-007',
    '"Control what you can. Let go of what you can\'t."',
    "Hiduplah seperti Larry."
  ];

  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote(quote);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col min-h-screen min-w-full relative">
        {/* Main Card */}
        <div className="flex flex-grow flex-col justify-center items-center">
          <div id="profile-box" className="mx-2 border border-[#3C8D79] rounded-2xl">
            <div className="p-4">
              <div className="flex items-center">
                {/* Profile Image */}
                <Image
                  src="/image/profile.jpg"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-md mr-4 object-cover"
                />
                <div>
                  <h1 className="font-bold text-lg md:text-2xl">Yamamo Juan</h1>
                  <p className="font-semibold text-sm md:text-lg text-[#858aa0]">Floss Enjoyer, rm -rf /</p>
                </div>
              </div>

              {/* Quote */}
              <p
                className="mt-4 text-sm md:text-base font-medium text-left"
                dangerouslySetInnerHTML={{ __html: randomQuote }}
              />
            </div>

            <hr className="border-[#3C8D79]" />

            {/* Social buttons */}
            <div className="grid justify-items-center">
              <div className="px-4 my-2 flex justify-end gap-4">
                <button
                  onClick={() => window.open('https://github.com/YamamoJuan', '_blank')}
                  className="flex items-center gap-1 text-sm hover:text-[#47a819]"
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} fontSize={14} />
                </button>
                <button
                  onClick={() => window.open('https://instagram.com/yamamojuan', '_blank')}
                  className="flex items-center gap-1 text-sm hover:text-[#47a819]"
                >
                  Instagram
                  <FontAwesomeIcon icon={faInstagram} fontSize={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-4 left-4 text-xs text-gray-400 flex items-center space-x-4">
          <span>© 2025 Y.</span>
          <a
            href="https://github.com/YamamoJuan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://instagram.com/yamamojuan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          {/* Linkable logo profile */}
          <Link href="/" passHref>
            <Image
              src="/image/profile.jpg"
              alt="Logo"
              width={18}
              height={18}
              className="rounded-full object-cover hover:scale-110 transition-transform cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
