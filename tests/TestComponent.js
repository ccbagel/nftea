import React from 'react'
import useUser from '../custom_hooks/useUser'

function TestComponent() {
    const { user, userWalletAddress, userBalance, userName } = useUser();

    return (
        <div>
            <h1>{userName}</h1>
            <p>{userBalance}</p>
            <p>{userBalance}</p>
            <p>{userWalletAddress}</p>
        </div>
    )
}

export default TestComponent
