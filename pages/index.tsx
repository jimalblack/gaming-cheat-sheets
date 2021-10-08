import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaming Cheat Sheets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Skyrim</h1>
        <Link href="skyrim/know-your-enemy">Know Your Enemy Matrix</Link>
      </main>
    </div>
  )
}

export default Home
