import React from 'react'
import Navbar from '../../components/common/Navbar'

export const getServerSideProps = context => {
    // fetch data here

    return {
        props: {
            // x: y
        }
    }
}

function Dashboard() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to your dashboard</h1>
        </div>
    )
}

export default Dashboard
