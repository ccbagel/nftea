import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFTea</title>
        <meta name="description" content="NFTea marketplace for NFTs" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to NFTea 🐸 ☕ !!!</h1>

        <p className={styles.description}>NFT marketplace project</p>

      </main>

      <footer className={styles.footer}>
          <p>Created by Hasan Ahmed</p>
      </footer>
    </div>
  )
}

// static page with ISR enabled 