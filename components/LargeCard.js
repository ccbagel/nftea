import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function LargeCard({ nftImage, name, profileImage, username, address, bids, supply, created, link, description }) {

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-screen-md md:max-w-screen-lg">
            <div className="flex flex-col items-center my-10">
                <p className="text-2xl md:text-3xl">{name}</p>
                <p className="text-blue-300 mt-5 text-sm max-w-1/2 text-center">{description ? description : "No description available"}</p>
                <div className="mt-10 w-60 md:w-80 flex flex-row justify-around ">
                        <>
                            <Link href="/dashboard"><a className="bg-white text-blue-600 px-8 py-1 rounded-lg">Back</a></Link>
                        </>
                        <>
                        <a href={link} className="bg-blue-600 px-8 py-1 rounded-lg">Visit</a>
                        </>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between p-3">
                <div className="flex flex-col md:mr-10 mb-10">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="text-3xl">Creator</h1>
                        <Image src={profileImage} alt="profile" width={40} height={40} className="rounded-full" /> 
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <p>Username: <span className="text-blue-300">{username === "username" ? "Not found" : username}</span></p> {/* username */}
                            <p className="text-xs text-blue-300">{address}</p> {/* address */}
                        </div>
                        <div className="mt-10">
                            <h1 className="text-3xl mb-3">Info</h1>
                            <p>Bids: <span className="text-blue-300">{bids}</span></p> {/* bid */}
                            <p>Created: <span className="text-blue-300">{created}</span></p> {/* created */}
                            <p>Supply: <span className="text-blue-300">{supply}</span></p> {/* supply */}
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full rounded-lg md:ml-10">
                    <Image src={nftImage} alt="cover" width={450} height={430} className="rounded-xl" />
                </div>
            </div>
        </div>
    )
}

export default LargeCard;