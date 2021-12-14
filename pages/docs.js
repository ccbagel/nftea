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
                    <p className="my-7">The frontend of this app was built using Nextjs, a framework for React web apps. I chose Nextjs because of the nature of this app NFTea. Since it revolves around NFTs, it made sense to optimize my images using NextJS`s <code className='bg-blue-900 px-1'>next/image</code> component.</p>
                    <p className="my-7">I also benefited from the performance optimizations Nextjs provides. Some of my pages are statically generated at build time (including static pages that require external data such as the landing page). I am also taking advantage of Nextjs`s Incremental static regeneration to achieve higher cache hit rates so my pages are stored on a CDN. Caching my pages make the app instantaneously fast and would save costs in a production app. Nextjs also provides code-splitting out of the box which was a major advantage</p>
                    <p className="my-7">The <code>/dashboard</code> page is also server-side rendered. This means better SEO for web crawlers. I also tried out client-side rendering where parts of the page are statically pre-rendered and the parts that rely on the data are rendered on the client. I used SWR for client-side rendering</p>
                    <p className="my-7">I used Redux Toolkit to store token ids so users could save a particular NFT and fetch them later on. I could`ve also done this using a database but I felt like it`s not need at this point in time. I might include one later down the road however.</p>
                    <p className="my-7">Other techniques I used in this app are custom hooks so I could re-use logic as much as I can.</p>
                </div>
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">API</h1>
                    <p className="my-7">Although I haven`t used Nextjs`s built-in API, I used SWR to fetch data, cache it, and revalidate it </p>
                </div>
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">Backend</h1>
                    <p className="my-7">The backend was the most exciting part. I created multiple versions of this app. The first version was a fullstack app that had a server, API, and database on the backend. I found myself spending too much time refactoring code and provisioning servers on the backend so I decided to rip it all out and use Firebase 9. I came across Moralis while looking for other options and decided to try out it`s Web3 SDK. That`s how this app came about. </p>
                    <p className="my-7">My backend runs on the Ethereum blockchain and also supports the Polygon, Binance, and Avalanche platforms. Theoretically, I could mint NFTs, send/recieve crypto, and have access to blockchain data such as the block, transactions, and history. I will probably extend the features on the app to support this in the future but getting the MVP done was my main goal</p>
                </div>
                <div className="m-4">
                    <h1 className="text-3xl mb-3 underline">Upcoming features</h1>
                    <p className="my-7">I want to challenge myself and add new complex features into the app. Building this was very complex, but there is a lot more to Web3 dApps that I want to include. Some of the features I got in mind are: </p>
                    <ul className="my-7">
                        <li className="list-disc my-3">Minting NFTs</li>
                        <li className="list-disc my-3">Crypto transactions</li>
                        <li className="list-disc my-3">Coin swapping</li>
                        <li className="list-disc my-3">Turning this project into a monorepo using Turborepo (since I`m already using Nextjs & Vercel). I eventually want to add an Android & iOS app to this project. The purpose of the app would be to allow photographers to capture images on their phone and mint it on the app to turn it into a NFT</li>
                        <li className="list-disc my-3">Custom use case. NFT site for photographers to turn their catalogue into a digital asset collection. Ownership is a big feature of NFTs</li>
                    </ul>
                    <p className="my-7">These are just ideas at the moment...</p>
                </div>

            </div>
        </>
    )
}

export default Docs
