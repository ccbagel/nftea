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
        <div className="flex flex-row justify-between md:justify-around items-center p-3">
            <div>
                <h1 className="text-2xl md:text-4xl">NFTea 🐸 ☕</h1>
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-row">
                    <Link href="/">
                        <li className="mx-3 cursor-pointer hover:text-blue-400">Home</li>
                    </Link>
                    <Link href="#">
                        <li className="mx-3 cursor-pointer hover:text-blue-400">Docs</li>
                    </Link>
                </ul>
            </div>
            {!user ? (
                <div>
                    <SecondaryBtn text={"Log in"} path={"/login"} />
                    <PrimaryBtn text={"Sign up"} path={"/signup"} />
                </div>
            ) : (
                <div>
                    <LogoutBtn text={"logout"} path={"/"} />
                </div>
            ) }
        </div>
    )
}

export default Navbar
