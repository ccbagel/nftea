import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/common/Navbar'
import SmallNftCard from '../components/SmallNftCard'
import NftGridLayout from '../components/reusable_comps/NftGridLayout'
import { features } from '../utilities/features'
import PrimaryBtn from '../components/reusable_comps/PrimaryBtn'
import SecondaryBtn from '../components/reusable_comps/SecondaryBtn'

// static page with ISR enabled 
export async function getStaticProps(context) {
  const url = 'https://api.opensea.io/api/v1/assets?collection=lilbabyapeclub&limit=8';

  const showcaseNft = await fetch(url);
  const data = await showcaseNft.json();
  
  return {
    props: { nfts: data }, // will be passed to the page component as props
  }
  // ISR 60s
  revalidate: 60
} 

export default function Home({ nfts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFTea</title>
        <meta name="description" content="NFTea marketplace for NFTs" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to NFTea 🐸 ☕ !!!</h1>
        <p className={styles.description}>NFTea is a Web3 dApp that runs on Ethereum, Binance, Avalanche and Polygon. For those who are not familiar with Web3, it just means our backend runs on blockchain which lets us interact with it to integrate transactions, mint new NFTs, write smart contracts, and much more.</p>

        <div className="flex flex-col md:flex-row">
            <SecondaryBtn text={"Log in"} path={"/login"} />
            <PrimaryBtn text={"Sign up"} path={"/signup"} />
        </div>

        <section className={styles.section}>
          <h1 className="text-2xl md:text-3xl mb-5">Featured NFTs</h1>
          <NftGridLayout>
            {nfts && nfts.assets.map(({ id, image_preview_url, name, description }) => (
                <SmallNftCard
                  key={id}
                  src={image_preview_url}
                  title={name}
                  description={description}
                  className={styles.nftcard}
                />
            ))}
          </NftGridLayout>
        </section>

        <section className={styles.section}>
              <h1 className="text-2xl md:text-3xl mb-5">Features</h1>
              <div className="flex flex-col md:flex-row mx-auto">
                {features.map(({ id, title, description }) => (
                  <div key={id} className="flex flex-col items-center text-center md:text-left md:w-1/3 m-7">
                    <h1 className="w-full text-2xl mb-3">{title}</h1>
                    <p className="text-blue-500">{description}</p>
                  </div>
                ))}
              </div>
        </section>

      </main>

      <footer className={styles.footer}>
          <p>Created by Hasan Ahmed</p>
      </footer>
    </div>
  )
}