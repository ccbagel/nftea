import React from 'react';
// import { MoralisProvider } from 'react-moralis';
// import { Moralis } from 'moralis';
import '../styles/globals.css'
import MoralisService from '../services/moralisService';

function MyApp({ Component, pageProps }) {
  // start moralis instance 
  // const appId = process.env.NEXT_PUBLIC_APP_ID;
  // const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  // Moralis.start({ serverUrl, appId });

  return (
    // <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <MoralisService>
      <Component {...pageProps} />
    </MoralisService>
    // </MoralisProvider>
  )
}

export default MyApp;
