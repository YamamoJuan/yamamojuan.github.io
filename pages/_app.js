import '@/styles/globals.css';
import Footer from '@/components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faTerminal,
  faBars,
  faXmark,
  faChevronDown,
  faArrowLeft,
  faWrench,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithub,
  faTerminal, faBars, faXmark, faChevronDown,
  faArrowLeft, faWrench, faArrowUpRightFromSquare,
);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
