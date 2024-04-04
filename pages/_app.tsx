import { useState } from "react";
import { AppProps } from 'next/app';
import BackgroundContext from '@/utils/context/sliderBg';
import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {

    const [background, setBackground] = useState({
      sliderBg: "intro-fm-yellow",
      bg: 'global-fm-yellow'
  });

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      <Component {...pageProps} />
    </BackgroundContext.Provider>
  );
}

export default MyApp;
