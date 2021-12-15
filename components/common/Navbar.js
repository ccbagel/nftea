/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import { Moralis } from 'moralis'
import LogoutBtn from '../reusable_comps/LogoutBtn'
import useUser from '../../custom_hooks/useUser'

function Navbar() {
    const { user } = useUser();

    return (
        <div className="flex flex-row justify-between items-center p-7">
            <div>
                <h1 className="text-xl md:text-4xl">NFTea 🐸</h1>
            </div>
            <div className="">
                <ul className="flex flex-row items-center">
                    <Link href="/">
                        <a className="mx-3 cursor-pointer hover:text-blue-400">Home</a>
                    </Link>
                    <Link href="/docs">
                        <a className="mx-3 cursor-pointer hover:text-blue-400">Docs</a>
                    </Link>
                </ul>
            </div>
            {user && (
                <div>
                    <LogoutBtn text={"logout"} path={"/"} />
                </div>
            ) }
        </div>
    )
}

export default Navbar
