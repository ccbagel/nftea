import React, { useState, useEffect } from "react";
import { Moralis } from 'moralis';

// custom hook to get the current user, wallet address, and balance
const useUser = () => {
    const [user, setUser] = useState(null);
    const [userWalletAddress, setUserWalletAddress] = useState('');
    const [userBalance, setUserBalance] = useState(0);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // get current logged in user
        let user = Moralis.User.current();

        // update state for user and wallet to get balance
        setUser(user);

        // if user's eth address is missing render username
        if(user) {
            setUserName(user.attributes.username)
            setUserWalletAddress(user.get("ethAddress"))
        }

        // handler function to get balance
        const getBalanceHandler = async () => {
            const options = { address: userWalletAddress };
            const balance = await Moralis.Web3API.account.getNativeBalance(options);

            setUserBalance(balance);
        };
        console.log(user);

    }, []) 

    return { user, userWalletAddress, userBalance, userName }
};

export default useUser;