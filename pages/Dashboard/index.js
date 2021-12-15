import React from 'react'
import Navbar from '../../components/common/Navbar'
import useUser from '../../custom_hooks/useUser'

export const getServerSideProps = context => {
    // get list of nfts here for dashboard
    return {
        props: {
            // x: y
        }
    }
}

function Dashboard() {
    const { user, userWalletAddress, userBalance, userName } = useUser();
    return (
        <div>
            <Navbar />
            <h1>Welcome to your dashboard</h1>
            {console.log("USER :", user)}
            {console.log("WALLET :", userWalletAddress)}
            {console.log("BALANCE :", userBalance)}
            {console.log("USERNAME :", userName)}
        </div>
    )
}

export default Dashboard
