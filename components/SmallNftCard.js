import React from 'react'
import Image from 'next/image'

function SmallNftCard({ src, title, description }) {
    return (
        <div className="m-3 bg-blue-700 mt-0 rounded-t-lg rounded-b-lg">
            <Image src={src} width={300} height={250} className="rounded-t-lg" alt={title} />
            <div className="w-full p-3">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default SmallNftCard
