import React from 'react'
import { useRouter } from 'next/router'

function SecondaryBtn({ text, path }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(path)
    }

    return (
        <button className="border-blue-600 hover:bg-blue-600 border-2 p-2 m-2 w-full text-white" onClick={handleClick}>{text}</button>
    )
}

export default SecondaryBtn