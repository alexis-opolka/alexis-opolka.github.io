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
        &nbsp; on Discord</a>

        <a href="linkedin://linkedin.com/in/alexis-opolka">Linkedin</a>
      </p>
    </footer>
  )
}
