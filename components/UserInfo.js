import React from 'react'

function UserInfo({ address, balance, username }) {
    return (
        <>
            {address ? (
                <div className="leading-7">
                    <h1 className="text-3xl my-2 text-blue-400">Balance: {balance} ETH</h1>
                    <p className="hidden md:block text-blue-400">{address}</p>
                </div>
            ) : (
                <div>
                    <h1 className="text-blue-400">{username}</h1>
                </div>
            )}
        </>
    )
}

export default UserInfo
