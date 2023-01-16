import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { FrenchFooter } from '../../footer'

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
          &apos;I&apos;m sorry, but I don&apos;t have any project to share for now.
        </h1>
      </main>

      <FrenchFooter />
    </div>
  )
}
