import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Footer from '../footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexis Opolka&apos;s website</title>
        <meta name="description" content="Welcome on Alexis Opolka's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I&apos;m sorry, but this page doesn&apos;t exist yet.
        </h1>
      </main>

      <Footer />
    </div>
  )
}
