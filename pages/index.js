import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/common/Navbar'
import { features } from '../utilities/features'
import PrimaryBtn from '../components/reusable_comps/PrimaryBtn'
import SecondaryBtn from '../components/reusable_comps/SecondaryBtn'

export default function Home() {
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
        <h1 className={styles.title}>Welcome to NFTea 🐸 ☕ ‼️</h1>
        <p className={styles.description}>NFTea is a Web3 dApp that runs on Ethereum, Binance, Avalanche and Polygon. For those who are not familiar with Web3, it just means our backend runs on blockchain which lets us interact with it to integrate transactions, mint new NFTs, write smart contracts, and much more.</p>

        <div className="flex flex-col md:flex-row w-9/12 md:w-4/12">
            <SecondaryBtn text={"Log in"} path={"/login"} />
            <PrimaryBtn text={"Sign up"} path={"/signup"} />
        </div>

        <section className={styles.section}>
              <h1 className="text-3xl md:text-4xl mb-5">Perks 🎁</h1>
              <div className="flex flex-col md:flex-row mx-auto w-full flex-wrap justify-center text-2xl">
                {features.map(({ id, title, description }) => (
                  <div key={id} className={styles.card}>
                    <h1 className="w-full text-2xl mb-3">{title}</h1>
                    <p className="text-white">{description}</p>
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