import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexis Opolka's website</title>
        <meta name="description" content="Welcome on Alexis Opolka's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Portfolio!
        </h1>

        <p className={styles.description}>
          What do you want to print?
        </p>

      </main>

      <footer className={styles.footer}>
        Developed by &nbsp;<span><a href="https://github.com/alexis-opolka/">Alexis Opolka</a></span> &nbsp; using &nbsp; <span><a href="https://nextjs.org">Next.js</a></span>
      </footer>
    </div>
  )
}
