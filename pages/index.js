import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/common/Navbar'
// small nft card

// static page with ISR enabled 
export async function getStaticProps(context) {
  const url = 'https://api.opensea.io/api/v1/assets?collection=lilbabyapeclub&limit=10';

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
        <p className={styles.description}>NFTea is a Web3 dApp that runs on the Ethereum, Binance, and Polygon blockchain. For those who are not familiar with Web3, it just means our backend runs on blockchain which lets us interact with it to integrate transactions, mint new NFTs, write smart contracts, and much more.</p>

        <section className={styles.section}>
          <h1 className="text-2xl md:text-3xl">Featured NFTs</h1>
          {/* {res.map((item) => (
            console.log(item)
          ))} */}
          {console.log(nfts)}
      </section>

      </main>

      <footer className={styles.footer}>
          <p>Created by Hasan Ahmed</p>
      </footer>
    </div>
  )
}