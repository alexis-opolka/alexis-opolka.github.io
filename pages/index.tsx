import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// Tests with animations in TS
import {BloomingFlowers} from './animations/flowers'
// Article can be found here: https://www.freecodecamp.org/news/how-to-compose-canvas-animations-in-typescript-9368dfa29028/
// Code can be found here: https://stackblitz.com/edit/canvas-flower-blooming?file=index.ts

// The original call:
// const canvas = document.getElementById('flower');
// const flowers = new BloomingFlowers(canvas);
// flowers.bloom();


export default function Home() {
  const flowers = new BloomingFlowers(document.getElementById("flowers"));
  flowers.bloom();
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

        <div id='test-animation'>
          Here are the animations
          <canvas id='flowers'></canvas>
        </div>
      </main>

      <footer className={styles.footer}>
        Developed by &nbsp;<span><a href="https://github.com/alexis-opolka/">Alexis Opolka</a></span> &nbsp; using &nbsp; <span><a href="https://nextjs.org">Next.js</a></span>
      </footer>
    </div>
  )
}
