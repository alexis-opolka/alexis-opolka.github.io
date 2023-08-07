import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexis Opolka&apos;s website</title>
        <meta name="description" content="Welcome on Alexis Opolka's website" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="refresh" content="0; url=https://youtu.be/mvbm--1ySxI" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Please wait while you&apos;re being redirected to the correct page...
        </h1>
      </main>

      <footer className={styles.footer}>
        Developed by &nbsp;<span><a href="https://github.com/alexis-opolka/">Alexis Opolka</a></span> &nbsp; using &nbsp; <span><a href="https://nextjs.org">Next.js</a></span>
      </footer>
    </div>
  )
}
