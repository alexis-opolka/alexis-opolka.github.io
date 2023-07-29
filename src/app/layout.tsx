// Stylesheets and Types imports
import styles from "/public/stylesheets/master.module.css";
import type { Metadata } from 'next'

// NextJS imports
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
export const metadata = {
  title: 'Alexis Opolka Portfolio',
  description: 'The website & portfolio of Alexis Opolka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${styles.html}`}>
      <body className={`body ${inter.className} ${styles.bordered} ${styles.body}`}>{children}</body>
    </html>
  )
}
