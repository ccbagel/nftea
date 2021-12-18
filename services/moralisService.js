import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { Moralis } from 'moralis';

// start moralis instance 
const appId = process.env.NEXT_PUBLIC_APP_ID;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

Moralis.start({ serverUrl, appId });

function MoralisService({ children }) {
    return (
        <MoralisProvider appId={appId} serverUrl={serverUrl}>
            {children}
        </MoralisProvider>
    )
}

export default MoralisService