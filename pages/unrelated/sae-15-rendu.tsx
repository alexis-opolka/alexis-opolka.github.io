import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Footer from '../footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexis Opolka&apos;s website</title>
        <meta name="description" content="Welcome on Alexis Opolka's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header'>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerContentLeft} style={{"fontSize": "32px"}}>
              Analyse de l&apos;utilisation des parkings et utilisation du service Vélib
            </div>
            <div className={styles.headerContentLeft}>
              By Alexis Opolka, Lucas Simpol
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.mainContentUpperPart}>
            <div className={styles.mainContentUpperLeft}>
              <div className={styles.mainContentTitle}>
                <div className={styles.mainContentTitleText}>
                  Analyse de l&apos;utilisation des parkings de la ville de montpellier.
                  <hr />
                </div>
              </div>
              <div className={styles.mainContentUpperLeftContent}>
                <div className={styles.mainContentUpperLeftContentText}>
                  <br />
                  Grâce au total des exports nous pouvons dire que certains parkings sont surdimentionés en fonction des données que nous disposions. <br />
                  Prenons par exemple le parking du Polygone de Montpellier, sur la durée de collecte de données, le parking n&apos;a jamais été plein au dela de 60%
                  (833 place disponible sur 1911 au total), donc sur la période de capture nous pouvons dire que le parking est surdimentioné par rapport a son utilisation. <br />
                  Sur un temps de capture plus long nous pourrions voir si le parking est plus utilisé. <br /><br />

                  <iframe src="http://188.166.151.235:3000/d/IDst7IoVk/utilisation-des-parkings?orgId=1&from=1673391600000&to=1674082799000&theme=dark" width={1000} height={500} style={{ "borderRadius": "8px" }}></iframe>
                  <br />
                </div>
              </div>
              <div className={styles.mainContentTitle}>
                <div className={styles.mainContentTitleText}>
                  Analyse de l&apos;utilisation des Vélibs
                  <hr />
                </div>
              </div>
              <div className={styles.mainContentUpperLeftContent}>
                <div className={styles.mainContentUpperLeftContentText}>
                  <br />
                  Les Vélib sont moyennement utilisés, sur les données récupérées, on peut voir que certaines &ldquo;stations&ldquo; sont utilisées
                  a 10% alors que d&apos;autres sont utilisées à 80% voir 90%. <br />
                  Prenons par exemple la &ldquo;station&ldquo; ID 003 qui correspond a la &ldquo;station&ldquo; Esplanade qui se situe à proximité
                  du parking de la comédie et du parking indigo.
                  La disponibilité des vélos est variable, à certains moments la station est pleine est à d&apos;autres, elle est vide
                  mais durant la période de prélèvement des données nous pouvons dire que dans la moyenne la station est utilisée a 50% mais
                  il nous est impossible de savoir si les utilisateur changent de moyen de transport (voiture/vélo) car il est a 3 parkings aux
                  alentours sont utilisé a environs 60%, mais nous pouvons supposer que les utilisateur des parkings viennent travailler,
                  faire leurs courses ou seulement visiter avec la proximité du polygone de montpellier.  <br /><br />

                  <iframe src="http://188.166.151.235:3000/d-solo/IDst7IoVk/utilisation-des-parkings?orgId=1&from=1673902290000&to=1673968980000&theme=dark&panelId=6" width={1000} height={500} style={{"borderRadius": "8px"}}></iframe>

                  <br />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// API - key
// eyJrIjoiVzJUeTloUkZVUmFMR1dkWXZPUHJkSmwyV3NTb1YzSlIiLCJuIjoiYWxleGlzLW9wb2xrYS5naXRodWIuaW8gLSBJbnRlZ3JhdGlvbiIsImlkIjoxfQ
// cURL command
// curl - H "Authorization: Bearer eyJrIjoiVzJUeTloUkZVUmFMR1dkWXZPUHJkSmwyV3NTb1YzSlIiLCJuIjoiYWxleGlzLW9wb2xrYS5naXRodWIuaW8gLSBJbnRlZ3JhdGlvbiIsImlkIjoxfQ==" http://188.166.151.235:3000/api/dashboards/home
