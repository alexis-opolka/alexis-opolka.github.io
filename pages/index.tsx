import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import animations from '../styles/animations.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexis Opolka&apos;s website</title>
        <meta name="description" content="Welcome on Alexis Opolka's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={animations.content} className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a id={animations.homeLink} href="./about">Portfolio</a>!
          <hr id={animations.homeBar} />
        </h1>

        <div className={styles.description && animations.content}>
          <div className={animations.content__container}>
            <p className={animations.content__container__text}>
              What to print:
            </p>

            <ul className={animations.content__container__list}>
              <li className={animations.content__container__list__item}>a life</li>
              <li className={animations.content__container__list__item}>a student</li>
              <li className={animations.content__container__list__item}>a career</li>
              <li className={animations.content__container__list__item}>a portfolio</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Developed by &nbsp;<span><a href="https://github.com/alexis-opolka/">Alexis Opolka</a></span> &nbsp; using &nbsp; <span><a href="https://nextjs.org">Next.js</a></span>
      </footer>
    </div>
  )
}
