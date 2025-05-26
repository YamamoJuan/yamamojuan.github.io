// pages/_app.js
import '@/styles/globals.css';
import Footer from '@/components/Footer'; // <- ini udah benar

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
