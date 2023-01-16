import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      Developed by &nbsp;<span><a href="https://github.com/alexis-opolka/">Alexis Opolka</a></span> &nbsp; using &nbsp; <span><a href="https://nextjs.org">Next.js</a></span> <hr />
      <a href="http://github.com/alexis-opolka/alexis-opolka.github.io" className={styles.contactLink}>
        <Image src="/github-mark-white.svg" alt="Github Logo" className={styles.logo} width={28} height={36} />
        &nbsp;  Website Repository
      </a>
      <p>
      </p>
      <p>
        Contact me: &nbsp;
        <a href="discord://discord.com/users/601745027789619203" className={styles.contactLink}>
          <Image src="/discord-mark-blue.svg" alt="Discord Logo" className={styles.logo} width={28} height={36} />
          &nbsp; on Discord
        </a>

        <a href="https://www.linkedin.com/in/alexis-opolka/?locale=en_US" className={styles.contactLink}>
          <Image src="/LI-In-Bug.png" alt="LinkedIn Logo" className={styles.logo} width={28} height={36} />
          &nbsp; on Linkedin
        </a>
        <a href="mailto:alexis-opolka.pro@protonmail.com" className={styles.contactLink}>
          <Image src="/Gmail.png" alt="Gmail Logo" className={styles.logo} width={28} height={36} />
          &nbsp; By Email
        </a>
      </p>
    </footer>
  )
}

export function FrenchFooter() {
  return (
    <footer className={styles.footer}>
      Dévelopé par &nbsp;<span><a href="https://github.com/alexis-opolka/">Alexis Opolka</a></span> &nbsp; avec &nbsp; <span><a href="https://nextjs.org">Next.js</a></span> <hr />
      <a href="http://github.com/alexis-opolka/alexis-opolka.github.io" className={styles.contactLink}>
        <Image src="/github-mark-white.svg" alt="Github Logo" className={styles.logo} width={28} height={36} />
        &nbsp;  Dépôt du site
      </a>
      <p>
      </p>
      <p>
        Me contacter: &nbsp;
        <a href="discord://discord.com/users/601745027789619203" className={styles.contactLink}>
          <Image src="/discord-mark-blue.svg" alt="Discord Logo" className={styles.logo} width={28} height={36} />
          &nbsp; Sur Discord
        </a>

        <a href="https://www.linkedin.com/in/alexis-opolka/" className={styles.contactLink}>
          <Image src="/LI-In-Bug.png" alt="LinkedIn Logo" className={styles.logo} width={28} height={36} />
          &nbsp; Sur Linkedin
        </a>
        <a href="mailto:alexis-opolka.pro@protonmail.com" className={styles.contactLink}>
          <Image src="/Gmail.png" alt="Gmail Logo" className={styles.logo} width={28} height={36} />
          &nbsp; Par Email
        </a>
      </p>
    </footer>
  )
}
