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
          Je suis désolé mais je n&apos;ai aucun projet à partager pour le moment.
        </h1>
      </main>

      <FrenchFooter />
    </div>
  )
}
