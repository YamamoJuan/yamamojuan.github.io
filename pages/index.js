import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col min-h-screen min-w-full">
        <div className="flex flex-grow flex-col justify-center items-center">
          <div id="profile-box" className="mx-2 border border-[#f8f8f8] rounded-2xl">
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
                  <p className="font-semibold text-sm md:text-lg text-[#c6c6c6]">Anime, Cat and Open Source ❤️</p>
                </div>
              </div>
              <p className="mt-4 text-sm md:text-base font-medium">
                Arch, F(L)OSS, Linux enjoyer. <br />
                Likes to learn something new everyday.
              </p>
            </div>
            <hr />
            <div className="grid justify-items-center">
              <div className="my-2 flex gap-x-4">
                <button onClick={() => window.open('https://github.com/FaizBastomi', '_blank')}>
                  GitHub
                  <FontAwesomeIcon className="ms-1" icon={faArrowUpRightFromSquare} />
                </button>
                <button onClick={() => window.open('https://ko-fi.com/faizbastomi', '_blank')}>
                  Ko-fi
                  <FontAwesomeIcon className="ms-1" icon={faArrowUpRightFromSquare} />
                </button>
                <button onClick={() => window.open('https://instagram.com/faizbastomi', '_blank')}>
                  Instagram
                  <FontAwesomeIcon className="ms-1" icon={faArrowUpRightFromSquare} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-1 gap-x-1">
            <Link className="hover:underline text-[#c6c6c6]" href="https://fonts.google.com/specimen/Plus+Jakarta+Sans" target="_blank">Plus Jakarta Sans</Link>
            <p>•</p>
            <Link className="hover:underline text-[#c6c6c6]" href="https://nextjs.org" target="_blank">Nextjs</Link>
            <p>•</p>
            <Link className="hover:underline text-[#c6c6c6]" href="https://fontawesome.com" target="_blank">Fontawesome</Link>
          </div>
        </div>
      </div>
    </>
  );
}
