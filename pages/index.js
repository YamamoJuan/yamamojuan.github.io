import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faFont, faPalette, faFontAwesome, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

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
      <div className="flex flex-col min-h-screen min-w-full">
        <div className="flex flex-grow flex-col justify-center items-center">
        <div id="profile-box" className="mx-2 border border-[#3C8D79] rounded-2xl">
            <div className="p-4">
              <div className="flex items-center">
                <img
                  src="/image/profile.jpg"
                  alt="Profile"
                  width="230"
                  height="230"
                  className="w-24 h-24 rounded-md mr-4"
                />
                <div>
                  <h1 className="font-bold text-lg md:text-2xl">Yamamo Juan</h1>
                  <p className="font-semibold text-sm md:text-lg text-[#858aa0]">motor/cycle</p>
                </div>
              </div>
              <p
                className="mt-4 text-sm md:text-base font-medium text-left"
                dangerouslySetInnerHTML={{ __html: randomQuote }}
              />
            </div>
            <hr className="border-[#3C8D79]"  />
            <div className="grid justify-items-center">
            <div className="px-4 my-2 flex justify-end">
            <button onClick={() => window.open('https://github.com/YamamoJuan', '_blank')}>
              Github
              <FontAwesomeIcon className="ms-1" icon={faArrowUpRightFromSquare} fontSize={12} />
            </button>
            </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-row text-sm justify-between p-3 items-end">
          {/* <div className="flex flex-col md:flex-row md:gap-x-4">
            <Link className="hover:underline hover:text-[#eba0ac] text-[#858aa0]" href="https://fonts.google.com/specimen/Plus+Jakarta+Sans" target="_blank">
              <FontAwesomeIcon className="me-1" icon={faFont} fontSize={14} />
              Plus Jakarta Sans
            </Link>
            <Link className="hover:underline hover:text-[#eba0ac] text-[#858aa0]" href="https://nextjs.org" target="_blank">
              <FontAwesomeIcon className="me-1" icon={faLayerGroup} fontSize={14} />
              Nextjs
            </Link>
            <Link className="hover:underline hover:text-[#eba0ac] text-[#858aa0]" href="https://github.com/catppuccin" target="_blank">
              <FontAwesomeIcon className="me-1" icon={faPalette} fontSize={14} />
              Catppuccin
            </Link>
            <Link className="hover:underline hover:text-[#eba0ac] text-[#858aa0]" href="https://fontawesome.com" target="_blank">
              <FontAwesomeIcon className="me-1" icon={faFontAwesome} fontSize={14} />
              Fontawesome
            </Link>
          </div> */}
          {/* <button className='hover:text-[#eba0ac] text-[#858aa0]' onClick={() => window.open('https://github.com/FaizBastomi/faizbastomi.github.io', '_blank')}>
            Clone on Github
            <FontAwesomeIcon className="ms-1" icon={faGithub} fontSize={14} />
          </button> */}
        </footer>
      </div>
    </>
  );
}
