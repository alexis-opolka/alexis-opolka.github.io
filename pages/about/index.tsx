import Head from 'next/head'
import Image from 'next/image'
import Footer from '../footer'
import styles from '../../styles/Home.module.css'
import animations from '../../styles/animations.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - Alexis Opolka Portfolio</title>
        <meta name="description" content="The portfolio of Alexis Opolka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={animations.content} className={styles.main}>
        <div id={animations.contentHolder}>
          <div className={animations.interactiveCard}>My name is <span className={styles.underlined}>Alexis Opolka</span></div>
          <div className={animations.interactiveCard}>My name is <span className={styles.underlined}>Alexis Opolka</span></div>
          <div className={animations.interactiveCard}>My name is <span className={styles.underlined}>Alexis Opolka</span></div>
          <div className={animations.interactiveCard}>My name is <span className={styles.underlined}>Alexis Opolka</span></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

