import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faFont, faPalette, faFontAwesome, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col min-h-screen min-w-full">
        <div className="flex flex-grow flex-col justify-center items-center">
          <div id="profile-box" className="mx-2 border border-[#89b4fa] rounded-2xl">
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
                  <h1 className="font-bold text-lg md:text-2xl">Faiz Bastomi</h1>
                  <p className="font-semibold text-sm md:text-lg text-[#858aa0]">Anime, Cat and Open Source ❤️</p>
                </div>
              </div>
              <p className="mt-4 text-sm md:text-base font-medium">
                Arch, F(L)OSS, Linux enjoyer. <br />
                Likes to learn something new everyday.
              </p>
            </div>
            <hr className="border-[#89b4fa]" />
            <div className="grid justify-items-center">
              <div className="my-2 flex gap-x-4">
                <button onClick={() => window.open('https://github.com/FaizBastomi', '_blank')}>
                  GitHub
                  <FontAwesomeIcon className="ms-1" icon={faArrowUpRightFromSquare} fontSize={16} />
                </button>
                <button onClick={() => window.open('https://ko-fi.com/nightiz', '_blank')}>
                  Ko-fi
                  <FontAwesomeIcon className="ms-1" icon={faArrowUpRightFromSquare} fontSize={16} />
                </button>
                <button onClick={() => window.open('https://instagram.com/faizbastomi', '_blank')}>
                  Instagram
                  <FontAwesomeIcon className="ms-1" icon={faArrowUpRightFromSquare} fontSize={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-row text-sm justify-between p-3 items-end">
          <div className="flex gap-x-4">
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
          </div>
          <Link className="hover:text-[#eba0ac] text-[#858aa0]" target="_blank" href="https://github.com/FaizBastomi/faizbastomi.github.io">
            Clone on GitHub
            <FontAwesomeIcon className="ms-2" icon={faGithub} fontSize={14} />
          </Link>
        </footer>
      </div>
    </>
  );
}
