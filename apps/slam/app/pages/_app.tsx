/** @format */

import { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="app">
        <div>
          Frontend: Hello There!!
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
