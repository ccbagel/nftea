/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import { Moralis } from 'moralis'
import PrimaryBtn from '../reusable_comps/PrimaryBtn'
import SecondaryBtn from '../reusable_comps/SecondaryBtn'
import LogoutBtn from '../reusable_comps/LogoutBtn'

function Navbar() {
    let user = Moralis.User.current();

    return (
        <div className="flex flex-row justify-between items-center p-7">
            <div>
                <h1 className="text-xl md:text-4xl">NFTea 🐸 ☕</h1>
            </div>
            <div className="">
                <ul className="flex flex-row">
                    <Link href="/">
                        <a className="mx-1 cursor-pointer hover:text-blue-400 text-sm">Home</a>
                    </Link>
                    <Link href="/docs">
                        <a className="mx-1 cursor-pointer hover:text-blue-400 text-sm">Docs</a>
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
