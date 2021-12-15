import React from 'react'
import { useRouter } from 'next/router'

function PrimaryBtn({ text, path }) {
    const router = useRouter();

    const handleClick = () => {
            router.push(path)
    }

    return (
        <button className="bg-blue-600 hover:bg-blue-700 p-2 m-2 w-full text-white shadow-xl shadow-blue-800/50" onClick={handleClick}>{text}</button>
    )
}

export default PrimaryBtn
