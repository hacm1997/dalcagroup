import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "boxicons/css/boxicons.min.css";
import TagManager from 'react-gtm-module';
import ReactGA from "react-ga4";
import {useEffect} from "react";

ReactGA.initialize("G-NF4WDX4P0T");

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    const tagManagerArgs = {
      gtmId: 'GTM-TSSHGWT'
    }

    TagManager.initialize(tagManagerArgs)
  },[])
  return <Component {...pageProps} />
}
