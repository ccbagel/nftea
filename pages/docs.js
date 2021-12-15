import React from 'react'
import Navbar from '../components/common/Navbar'

function Docs() {
    return (
        <>
        <Navbar />
            <div className="p-10 md:px-36 flex flex-col leading-8 md:leading-10 text-xl">
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">Welcome to /docs</h1>
                    <p>This page is built to outline the technical aspects of this project</p>
                    <p>I will cover the tools and techniques I used to build this app</p>
                </div>
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">The frontend</h1>
                    <p className="my-7">The frontend of this app was built using <a href="https://nextjs.org/" className="text-blue-500">Nextjs</a>, a framework for <a href="https://reactjs.org/" className="text-blue-500">React</a> web apps. I chose Nextjs because of the nature of this app NFTea. Since it revolves around NFTs, it made sense to optimize my images using NextJS`s <code className='bg-blue-900 px-1'>next/image</code> component.</p>
                    <p className="my-7">I also benefited from the performance optimizations Nextjs provides. Some of my pages are statically generated at build time (including static pages that require external data such as the landing page). I am also taking advantage of Nextjs`s <a href="https://vercel.com/docs/concepts/next.js/incremental-static-regeneration" className="text-blue-500">Incremental static regeneration</a> to achieve higher cache hit rates so my pages are stored on a CDN. Caching my pages makes the app lightning fast and would save costs in a production app. Nextjs also provides code-splitting out of the box which was another major advantage.</p>
                    <p className="my-7">The <code>/dashboard</code> page is also server-side rendered. This means better SEO for web crawlers. I also tried out client-side rendering where parts of the page are statically pre-rendered and the parts that rely on the data are rendered on the client. I used <a href="https://swr.vercel.app/" className="text-blue-500">SWR</a> for client-side rendering.</p>
                    <p className="my-7">Other techniques I used in this app are custom hooks so I could re-use code as much as I can.</p>
                    <p className="my-7">Finally, I used <a href="https://tailwindcss.com/" className="text-blue-500">TailwindCSS</a> to style the app. Initially, I wanted to go with SASS modules but the utility classes Tailwind offers makes the development time a lot shorter. It would have taken a very long time to write hundreds of lines of SASS code.</p>
                </div>
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">API</h1>
                    <p className="my-7">Although I haven`t used Nextjs`s built-in API, I used SWR to fetch data, cache it, and revalidate it.</p>
                </div>
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">Backend</h1>
                    <p className="my-7">The backend was the most exciting part. I created multiple versions of this app. The first version was a fullstack app that had a server, API, and database on the backend. I found myself spending too much time refactoring code, provisioning servers, and trying out different data encryption libs for my database models/schemas on the backend. So, I decided to rip it all out and use <a href="https://firebase.google.com/products-build" className="text-blue-500">Firebase 9</a>. I came across <a href="https://moralis.io/" className="text-blue-500">Moralis</a> while looking for other options and decided to try out it`s Web3 SDK. That`s how this app came about. </p>
                    <p className="my-7">My backend runs on the <a href="https://ethereum.org/en/" className="text-blue-500">Ethereum</a> blockchain and also supports the <a href="https://polygon.technology/" className="text-blue-500">Polygon</a>, <a href="https://www.binance.com/en" className="text-blue-500">Binance</a>, and <a href="https://www.avax.network/" className="text-blue-500">Avalanche</a> platforms. The data is stored both on-chain and off-chain. Theoretically, I could mint NFTs, send/recieve crypto, and have access to blockchain data such as the block, transactions, and history. I will probably extend the features of the app to support this in the future but getting the MVP done was my main goal.</p>
                </div>
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">Upcoming features</h1>
                    <p className="my-7">I want to challenge myself and add new complex features into the app. Building this was already very complex, but there is a lot more to Web3 dApps that I want to include. Some of the features I got in mind are: </p>
                    <ul className="my-7">
                        <li className="list-disc my-3">Minting NFTs</li>
                        <li className="list-disc my-3">Crypto transactions</li>
                        <li className="list-disc my-3">Coin swapping</li>
                        <li className="list-disc my-3">Turning this project into a monorepo using Turborepo (since I`m already using Nextjs & Vercel). I eventually want to add an Android & iOS hybdrid app using <a href="https://reactnative.dev/" className="text-blue-500">React Native</a> to this project. The purpose of the app would be to allow photographers to capture images on their phone and mint it on the app to turn it into a NFT</li>
                        <li className="list-disc my-3">Custom use case: NFT site for photographers to turn their catalogue into a digital asset collection. Ownership is a big feature of NFTs. I`m thinking of rebranding the entire site when everything else is done.</li>
                    </ul>
                    <p className="my-7">These are just ideas at the moment...</p>
                </div>

            </div>
        </>
    )
}

export default Docs
