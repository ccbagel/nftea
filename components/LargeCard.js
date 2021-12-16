import React from 'react'
import Image from 'next/image'
import PrimaryBtn from './reusable_comps/PrimaryBtn'

function LargeCard({ nftImage, name, banner, profileImage, username, address, bids, supply, created, link, description }) {

    return (
        <div className="flex flex-col items-center">
            {/* <div>
                <Image src={banner} alt="banner" width={500} height={150} className="" />
            </div> 
            <div>
                <p className="text-sm md:w-1/2 text-center">{description}</p>
            </div> */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                    <h1 className="text-xl">Creator</h1>
                        <Image src={profileImage} alt="profile" width={50} height={50} className="rounded-full" /> 
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <p>username: {username === "username" ? "Not found" : username}</p> {/* username */}
                            <p className="text-xs">{address}</p> {/* address */}
                        </div>
                        <div className="mt-5">
                            <h1 className="text-xl">Info</h1>
                            <p>bids: {bids}</p> {/* bid */}
                            <p>created: {created}</p> {/* created */}
                            <p>supply: {supply}</p> {/* supply */}
                        </div>
                    </div>
                    <div className="w-1/2 mx-0">
                            <PrimaryBtn path={link} text={"Visit"} /> {/* visit opensea */}
                        </div>
                </div>
                <div className="mx-10">
                    <Image src={nftImage} alt="cover" width={400} height={350} /> {/* nft */}
                </div>
            </div>
        </div>
    )
}

export default LargeCard;