/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
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
                    <li className="hover:text-blue-400 mx-2">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-blue-400 mx-2">
                        <Link href="/docs">Docs</Link>
                    </li>
                </ul>
            </div>
            {user && (
                <div>
                    <LogoutBtn text={"logout"} path={"/"} />
                </div>
            )}
        </div>
    )
}

export default Navbar