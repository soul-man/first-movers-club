import { useState } from "react";
import { AppProps } from 'next/app';
import BackgroundContext from '@/utils/context/themeContext';

import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {

    const [background, setBackground] = useState({
      sliderBgColor: "intro-fm-yellow",
      colorPrimary: 'global-fm-yellow',
      textColorSecondary: 'text-black'
    });

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      <Component {...pageProps} />
    </BackgroundContext.Provider>

  );
}

export default MyApp;
