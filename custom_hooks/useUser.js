import { useState, useEffect } from "react";
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
        if(!user.attributes.ethAddress) {
            setUserName(user.attributes.username)
        } else {
            setUserWalletAddress(user.get("ethAddress"))
        }

        // handler function to get balance
        // eslint-disable-next-line no-unused-vars
        const getBalanceHandler = async () => {
            const options = {address: userWalletAddress};
            const balance = await Moralis.Web3API.account.getNativeBalance(options);

            setUserBalance(balance);
        };

    }, [user, userBalance, userWalletAddress, userName]) 

    return { user, userWalletAddress, userBalance, userName }
};

export default useUser;