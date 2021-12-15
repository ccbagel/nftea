import React from 'react'
import { useRouter } from 'next/router'
import { Moralis } from 'moralis';
import { useMoralis } from 'react-moralis';

function LogoutBtn({ text, path }) {
    const router = useRouter();

    const { logout } = useMoralis();
    let user = Moralis.User.current()

    const handleClick = (user) => {
        logout(user);
        router.push("/")
    }

    return (
        <button className="bg-blue-600 hover:bg-blue-700 p-2 m-2 w-full text-white" onClick={handleClick}>{text}</button>
    )
}

export default LogoutBtn
