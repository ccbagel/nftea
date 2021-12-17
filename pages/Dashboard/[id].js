/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import useSWR from 'swr'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Navbar from '../../components/common/Navbar';
import LargeNftCard from '../../components/LargeCard';

function NFT() {
    // use next/router to grab the [id] in the url for the query
    const router = useRouter();
    const query = router.query.id


    // <<--------- CREATES INFINITE LOOP ERROR --------->>
    // const [query, setQuery] = useState('');
    // setQuery(routerQuery)
    // grab query frm router object here, avoid re-renders & infinite loop using useEffect to run once
    // useEffect(() => {
    //     setQuery(router.query)
    // }, [])
    // <<--------- CREATES INFINITE LOOP ERROR --------->>


    const url = `https://api.opensea.io/api/v1/assets?limit=1&token_ids=${query}`;

    // fetcher for SWR
    const fetchData = async (...args) => {
        return await fetch(...args).then(res => res.json());
    }

    const { data, isValidating, error } = useSWR(url, fetchData);

    if(isValidating || query === undefined) { return <h1>Loading...</h1> }
    if(error) { return <h1>Error :(</h1>}

    return (
        <div>
            <header>
                <Navbar />
            </header>
            
            <main className="mb-20">
                {/* i could also use data && to render because the first time it loads its all undefined */}
                <section className="flex flex-row items-center justify-center p-5">
                    {data && data.assets.map((item) => (
                        <div key={item.token_id}> 
                            <LargeNftCard
                            nftImage={item.image_url}
                            name={item.name}
                            profileImage={item.creator.profile_img_url}
                            username={"username"}
                            address={item.creator.address}
                            bids={0}
                            supply={0}
                            created={item.collection.created_date}
                            link={item.permalink}
                            description={item.collection.description}
                            />
                        </div>
                    ))}
                    {console.log(data)}
                </section>
            </main>

            <footer className={styles.footer}>
                <p>Created by Hasan Ahmed</p>
            </footer>

        </div>
    )
}

export default NFT;
