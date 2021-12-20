import React from 'react'
import useSWR from 'swr'
import Navbar from '../../components/common/Navbar'
import useUser from '../../custom_hooks/useUser'
import NftGridLayout from '../../components/reusable_comps/NftGridLayout'
import UserInfo from '../../components/UserInfo'
import SmallNftCard from '../../components/SmallNftCard'
import styles from '../../styles/Home.module.css'

// export const getServerSideProps = async (context) => {
//     // get list of nfts here for dashboard
//     const url = "https://api.opensea.io/api/v1/assets?limit=20";
//     const options = {
//         method: 'GET',
//         // limit: 20,
//         headers: {
//             'X-API-KEY': '50e679b3778542b39538b25379f1b9a5'
//         }
//     }

//     const res = await fetch("https://api.opensea.io/api/v1/assets?limit=20");
//     const data = await res.json()

//     return { 
//         props: {
//             nfts: data
//         }
//     }
// }

function Dashboard() {
    // custom hook to get current user
    const { userWalletAddress, userBalance, userName } = useUser();

    const url = "https://api.opensea.io/api/v1/assets?limit=20";

    // fetcher for SWR
    const fetchData = async (...args) => {
        return await fetch(...args).then(res => res.json());
    }

    const { data, isValidating, error } = useSWR(url, fetchData);

    if(isValidating) { return <h1>Loading...</h1> }
    if(error) { return <h1>Error :(</h1>}

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
                        {data.assets && data.assets.map((item) => (
                            <div key={item.token_id}>
                                <SmallNftCard 
                                    src={item.image_preview_url}
                                    name={item.asset_contract.name}
                                    title={item.name}
                                    description={item.asset_contract.description}
                                    token_id={item.token_id}
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