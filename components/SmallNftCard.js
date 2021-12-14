import React from 'react'
import Image from 'next/image'

function SmallNftCard({ src, name, title }) {
    return (
        <div className="m-3 bg-blue-700 mt-0 rounded-t-lg rounded-b-lg hover:ring-4 ring-white">
            <Image src={src} width={300} height={250} className="rounded-t-lg " alt={name} />
            <div className="w-full p-3 flex flex-row justify-between">
                <h1>{title}</h1>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default SmallNftCard
