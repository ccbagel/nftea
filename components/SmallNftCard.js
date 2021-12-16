import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function SmallNftCard({ src, name, title, token_id }) {
    const router = useRouter();

    // redirect to [id] page when clicked
    const rediredToNFT = () => {
        router.push({
            pathname: "/dashboard/[...id]",
            query: { id: token_id }
        })
    }

    return (
        <div className="m-5 mt-0 my-5 bg-blue-700 rounded-t-lg rounded-b-lg hover:ring-4 ring-white hover:scale-95 hover:transition duration-200 ease-out cursor-pointer max-w-sm" onClick={rediredToNFT}>
            <Image src={src} width={300} height={250} className="rounded-t-lg " alt={name} />
            <div className="p-3 flex flex-col items-center leading-7">
                <h1 className="text-sm max-w-xs">{title}</h1>
                <p className="text-blue-400">{name}</p>
            </div>
        </div>
    )
}

export default SmallNftCard
