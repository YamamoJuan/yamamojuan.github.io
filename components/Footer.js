// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="fixed bottom-4 left-4 text-xs text-gray-400 flex items-center space-x-4 z-50">
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
  );
}
