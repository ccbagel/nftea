import React from 'react'
import Image from 'next/image'

function SmallNftCard({ src, name, title }) {
    return (
        <div className="m-5 mt-0 my-5 bg-blue-700 rounded-t-lg rounded-b-lg hover:ring-4 ring-white hover:scale-95 hover:transition duration-200 ease-out cursor-pointer max-w-sm">
            <Image src={src} width={300} height={250} className="rounded-t-lg " alt={name} />
            <div className="p-3 flex flex-col items-center leading-7">
                <h1>{title}</h1>
                <p className="text-blue-400">{name}</p>
            </div>
        </div>
    )
}

export default SmallNftCard
