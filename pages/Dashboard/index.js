import React from 'react'
import Navbar from '../../components/common/Navbar'
import useUser from '../../custom_hooks/useUser'
import NftGridLayout from '../../components/reusable_comps/NftGridLayout'
import UserInfo from '../../components/UserInfo'
import SmallNftCard from '../../components/SmallNftCard'
import styles from '../../styles/Home.module.css'

export const getServerSideProps = async (context) => {
    // get list of nfts here for dashboard
    const res = await fetch("https://api.opensea.io/api/v1/assets?limit=8");
    const data = await res.json()

    return { 
        props: {
            nfts: data
        }
    }
}

function Dashboard({ nfts }) {
    // custom hook to get current user
    const { userWalletAddress, userBalance, userName } = useUser();

    return (
        <div className="">
            <header>
                <Navbar />
            </header>
            <main className="mb-20">
                <section className="flex flex-col items-center text-center m-5">
                    <h1 className="text-2xl">Welcome to your dashboard</h1>
                    <UserInfo 
                    address={userWalletAddress}
                    balance={userBalance}
                    username={userName}
                    />
                </section>
                <section>
                    <NftGridLayout>
                        {nfts.assets.map((item) => (
                            <div key={item.token_id}>
                                <SmallNftCard 
                                    src={item.image_preview_url}
                                    name={item.asset_contract.name}
                                    title={item.name}
                                    description={item.asset_contract.description}
                                />
                            </div>
                        ))}
                    </NftGridLayout>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>Created by Hasan Ahmed</p>
            </footer>
        </div>
    )
}

export default Dashboard