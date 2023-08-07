import Head from 'next/head'
import Image from 'next/image'
import {FrenchFooter} from '../../footer'
import styles from '../../../styles/Home.module.css'
import animations from '../../../styles/animations.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A propos de moi - Alexis Opolka Portfolio</title>
        <meta name="description" content="The portfolio of Alexis Opolka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header'>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerContentLeft}>
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={110} height={110}></Image></Link>
            </div>
            <div className={styles.headerContentCenter}>
              <div className={styles.headerContentCenterLinks}>
                <Link href="/fr/about" className={styles.headerContentCenterLinksLink}>A Propos</Link>
                <Link href="/fr/stories" className={styles.headerContentCenterLinksLink}>Mes Histoire</Link>
                <Link href="/fr/projects" className={styles.headerContentCenterLinksLink}>Mes Projets</Link>
              </div>
            </div>
            <div className={styles.headerContentRight}>
              <div className={styles.headerContentRightActions}>
                <Link href="/fr/about/">
                  <Image src="/fr-flag.svg" alt="French flag" width={50} height={30} className={styles.headerContentRightsActionsAction}></Image>
                </Link>
                <Link href="/en/about">
                  <Image src="/en-flag.svg" alt="English flag" width={50} height={30} className={styles.headerContentRightsActionsAction}></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div id={animations.content} className={styles.main}>
          <div className={styles.mainContent}>
            <div className={styles.mainContentUpperPart}>
              <div className={styles.mainContentUpperLeft}>
                <div className={styles.mainContentTitle}>
                  <div className={styles.mainContentTitleText}>
                    A propos de moi
                    <hr />
                  </div>
                </div>
                <div className={styles.mainContentUpperLeftContent}>
                  <div className={styles.mainContentUpperLeftContentText}>
                    Je suis un étudiant français de 18 ans, actuellement en train d&apos;étudier un <span><Link href="https://www.iutbeziers.fr/rt-beziers.html">BUT Réseaux et Télécommunications</Link></span> à  l&apos;<Link href="https://iutbeziers.fr">IUT de Béziers</Link>.
                    <br />
                    Je suis intéréssé par tout ce qui est développement cloud ou gamedev.
                    <br />
                    <br />
                    Je lis et écris régulièrement des histoire sans genre particulier. <br />
                    Je préfère le genre fantastique mais je ne m&apos;y limite pas. (Si vous êtes intéréssés, vous pouvez lire mes histoires <Link href="/stories">dans cette section</Link>)
                    <br />
                    <br />
                    Je suis engagé dans deux associations:
                    <br />
                    <div>
                      <Link href="https://petitspapiersdarchitecture.fr/" className={styles.filterWhite}>
                        <Image src="/logo-ppa.svg" alt="Petits Papiers d'Architecture Logo" width={200} height={100} className={styles.flexImg} />
                      </Link>
                      <Link href="/unrelated/not-yet-founded/" className={styles.filterWhite}>
                        <Image src="/logo-heimdall.svg" alt="Heimdall Logo" width={200} height={100} className={styles.flexImg} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainContentUpperRight}>
                <div className={styles.mainContentUpperRightProfilePicture}>
                  <Image src="/profile-picture.svg" alt="Profile picture" width={300} height={300} className={styles.mainContentUpperRightProfilePictureImage} />
                </div>
              </div>
            </div>
            <div className={styles.mainContentLowerPart}>
              <div className={styles.mainContentLowerLeft}>
                <div id={styles.mainContentLowerLeftLeftPart} className={styles.mainContentLowerLeftLeftPart}>
                  <div className={styles.mainContentTitle}>
                    <div className={styles.mainContentTitleText}>
                      Mes compétences
                      <hr />
                    </div>
                  </div>
                  <div className={styles.mainContentLowerLeftLeftPartContent}>
                    <div className={styles.mainContentLowerLeftLeftPartContentText}>
                      <SkillFocus name={"Développement Web"} level={4} description={"Je suis capable de designer, créer et maintenir un site web, une page web ou une application web."} technologies={["HTML", "CSS", "Javascript", "Typescript", "ReactJS", "NextJS", "PHP"]} />
                      <SkillFocus name={"Développement de Jeux Vidéos"} level={2} description={"Je suis capable de designer un jeu, créer une UI/UX rudimentaire comme un level design"} technologies={["C#", "C++", "Ren'Py", "JavaScript", "Python"]} />
                      <SkillFocus name={"Développement Cloud"} level={2} description={"Je suis capable de manipuler des kubernetes / dockers / podmans avec de la difficuluté en fonction de la complexité."} technologies={["YAML", "Bash"]} />
                      <SkillFocus name={"SysAdmin"} level={4} description={"Je suis capable d'administrer un ordinateur qu'il tourne soit sur Linux (RHEL y compris) ou Windows, le configurer localement, NIS, Installation Réseau"} technologies={["Bash", "Powershell", "Python"]} />
                      <SkillFocus name={"Réseaux"} level={4} description={"Je suis capable de concevoir, configurer, résoudre des problèmes réseaux qu'ils viennent de la machine ou du matériel réseaux."} technologies={["Bash", "Powershell", "Python", "YAML"]} />
                      <SkillFocus name={"Suites bureautiques"} level={5} description={"Je suis capable d'utiliser la plupart des logiciels de bureautique comme Microsoft Office, LibreOffice, Google Suite, etc."} technologies={["Microsoft Office", "LibreOffice", "Google Suite"]} />
                    </div>
                  </div>
                </div>
                <div id={styles.mainContentLowerLeftRightPart} className={styles.mainContentLowerLeftRightPart}>
                  <div className={styles.mainContentTitle}>
                    <div className={styles.mainContentTitleText}>
                      Mes expériences en entreprise
                      <hr />
                    </div>
                  </div>
                  <div className={styles.mainContentLowerLeftRightPartContent}>
                    <div className={styles.mainContentLowerLeftRightPartContentText}>
                      <WorkFocus name={"Assistant d'approvisionnement"} status={"Fini"} establishment={"Lidl France, 34500 Béziers, France"} date={"08/2022-01/2023"} accessLink={"https://www.lidl.fr/"} />
                      <WorkFocus name={"Assistant paysagiste"} status={"Fini"} establishment={"AgriGarden, 34350 Vendres, France"} date={"Les étés de 2019 à 2021"} accessLink={"#"} />
                    </div>
                  </div>
                  <br />
                  <div className={styles.mainContentTitle}>
                    <div className={styles.mainContentTitleText}>
                      Ma formation
                      <hr />
                    </div>
                  </div>
                  <div className={styles.mainContentLowerLeftRightPartContent}>
                    <div className={styles.mainContentLowerLeftRightPartContentText}>
                        <FormationFocus name={"BUT en Réseaux et Télécommunications"} status={"En train d'étudier"} specialties="N/A" establishment={"IUT de Béziers, 34500 Béziers, France"} date={"2022-2025"} accessLink={"https://www.iutbeziers.fr/"} />
                        <FormationFocus name={"Baccalauréat"} status={"mention Bien"} specialties={"Mathématiques, Numérique et Science de l'informatique, Langue Littérature et Culture étrangère - Anglais"} establishment={"Lycée Marc Bloch, 34410 Sérignan, France"} date={"2019-2022"} accessLink={"http://www.lyc-bloch-serignan.fr/marcbloch/"} />
                        <FormationFocus name={"Brevet des collèges"} status={"mention Très Bien"} specialties="N/A" establishment={"Collège Marcel Pagnol, 34410 Sérignan, France"} date={"2016-2019"} accessLink={"https://clg-pagnol-serignan.ac-montpellier.fr/"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainContentLowerRight}>
                  <a id={animations.curriculumVitae} className={styles.mainContentLowerRightLower} href='/pdf/fr/curriculum-vitae-alexis-opolka.pdf'>
                  Téléchargez mon Curriculum Vitae en PDF
                </a>
                <div className={styles.mainContentLowerLeftRightPart}>
                <div className={styles.mainContentTitle}>
                  <div className={styles.mainContentTitleText}>
                    Mes engagements associatifs
                    <hr />
                  </div>
                </div>
                <div className={styles.mainContentLowerLeftRightPartContent}>
                  <div className={styles.mainContentLowerLeftRightPartContentText}>
                    <AssociationFocus name={"Heimdall"} status={"Co-Président"} establishment={"Heimdall, 34500 Béziers, France"} date={"2023-Présent"} accessLink={""} />
                    <AssociationFocus name={"Petits Papiers d'Architecture"} status={"Directeur technique"} establishment={"ENSAM, 3400 Montpellier, France"} date={"2022-Présent"} accessLink={"https://petitspapiersdarchitecture.fr"} />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <FrenchFooter />
      </main>
    </div>
  )
}

function FormationFocus(props: { name: string, status: string, specialties: string, establishment: string, date: string, accessLink: string }) {
  return (
    <div className={styles.formationFocus}>
      <div className={styles.formationFocusName}>
        {props.name} - {props.status}
      </div>
      Spécialisations choisies: {props.specialties}
      <div className={styles.formationFocusEstablishment}>
        <Link href={props.accessLink} className={styles.establishmentLink}> {props.establishment} </Link>
      </div>
      <div className={styles.formationFocusDate}>
        {props.date}
      </div>
    </div>
  )
}

function SkillFocus(props: { name: string, level: number, description: string, technologies: string[]}) {
  return (
    <div className={styles.skillFocus}>
      <div className={styles.skillFocusName}>
        {props.name} - {/* For each technology inline show the name */}
        {/* If the technology is not the last one, add a comma */}
        {/* If the technology is the last one, add a period */}
        {/* Example: HTML, CSS, Javascript, Typescript, ReactJS, NextJS, PHP. */}
        {props.technologies && props.technologies.map((technology, index) => (
          <span key={index}>
            {technology}
            {index !== props.technologies.length - 1 ? ", " : "."}
          </span>
        ))}
      </div>
      {props.description}
      <div className={styles.skillFocusLevel}>
        {getLevel(props.level)}
      </div>
    </div>
  )
}

// Function to get the level of a skill
// using a system such as hp, mp, xp, etc.
// Rounded rectangles are used to represent the level
// The level is represented by a number between 0 and 5
// The empty bar should have a background color of #1adaba
// The filled bar should have a background color of #fff
// The section between the filled and empty bar should have a cursor icon of pointer
// The image should be a SVG image

function getLevel(level: number) {
  return (
    <div className={styles.skillFocusLevelBar}>
      <div className={styles.skillFocusLevelBarFilled} style={{width: `${level * 20}%`}}>
      </div>
    </div>
  )
}

function WorkFocus(props: { name: string, status: string, establishment: string, date: string, accessLink: string }) {
  return (
    <div className={styles.workFocus}>
      <div className={styles.workFocusName}>
        {props.name} - {props.status}
      </div>
      <div className={styles.workFocusEstablishment}>
        <Link href={props.accessLink} className={styles.establishmentLink}> {props.establishment} </Link>
      </div>
      <div className={styles.workFocusDate}>
        {props.date}
      </div>
    </div>
  )
}

function AssociationFocus(props: { name: string, status: string, establishment: string, date: string, accessLink: string }) {
  return (
    <div className={styles.associationFocus}>
      <div className={styles.associationFocusName}>
        {props.name} - {props.status}
      </div>
      <div className={styles.associationFocusEstablishment}>
        <Link href={props.accessLink} className={styles.establishmentLink}> {props.establishment} </Link>
      </div>
      <div className={styles.associationFocusDate}>
        {props.date}
      </div>
    </div>
  )
}
