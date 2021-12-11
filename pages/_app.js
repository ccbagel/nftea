import { MoralisProvider } from 'react-moralis';
import { Moralis } from 'moralis';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // start moralis instance 
  const appId = "3RmKQnqELOdVkfLVSa8txt5H2j4DvM3yJIQfsBfT";
  const serverUrl = "https://7wxk9bbssnyb.usemoralis.com:2053/server";

  Moralis.start({ serverUrl, appId });

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp;
