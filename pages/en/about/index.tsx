import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../footer'
import styles from '../../../styles/Home.module.css'
import animations from '../../../styles/animations.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - Alexis Opolka Portfolio</title>
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
                <Link href="/en/about" className={styles.headerContentCenterLinksLink}>About</Link>
                <Link href="/en/stories" className={styles.headerContentCenterLinksLink}>My Stories</Link>
                <Link href="/en/projects" className={styles.headerContentCenterLinksLink}>My Projects</Link>
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
                    About Me
                    <hr />
                  </div>
                </div>
                <div className={styles.mainContentUpperLeftContent}>
                  <div className={styles.mainContentUpperLeftContentText}>
                    I&apos;m a 18 years old french student, currently studying <span><Link href="https://www.iutbeziers.fr/rt-beziers.html">Networks and Telecommunications</Link></span> at the <Link href="https://iutbeziers.fr">IUT Béziers</Link>.
                    <br />
                    I&apos;m interested in everything related to cloud computing, web development and game development.
                    <br />
                    <br />
                    I&apos;m also actively reading or writing stories without any particular genre. <br />
                    I do have a preference for the fantasy genre, but I&apos;m not limited to it. (If you&apos;re interested, you can check my stories <Link href="/stories">here</Link>)
                    <br />
                    <br />
                    I&apos;m commited to two associations:
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
                      My skills
                      <hr />
                    </div>
                  </div>
                  <div className={styles.mainContentLowerLeftLeftPartContent}>
                    <div className={styles.mainContentLowerLeftLeftPartContentText}>
                      <SkillFocus name={"Web Development"} level={4} description={"I'm able to design, create and maintain a website / webpage or web application."} technologies={["HTML", "CSS", "Javascript", "Typescript", "ReactJS", "NextJS", "PHP"]} />
                      <SkillFocus name={"Game Development"} level={2} description={"I'm able to design, create a rudimentary UI/UX and level design."} technologies={["C#", "C++", "Ren'Py", "JavaScript", "Python"]} />
                      <SkillFocus name={"Cloud Computing"} level={2} description={"I'm able to manipulate kubernetes / dockers / podmans with a bit of difficulty depending of the complexity."} technologies={["YAML", "Bash"]} />
                      <SkillFocus name={"SysAdmin"} level={4} description={"I'm able to administer a computer either running on Linux (RHEL included) or Windows, local configuration, NIS, Network Install."} technologies={["Bash", "Powershell", "Python"]} />
                      <SkillFocus name={"Network"} level={4} description={"I'm able to conceive, configure a network, troubleshoot connection issues from either PCs or network equipment"} technologies={["Bash", "Powershell", "Python", "YAML"]} />
                      <SkillFocus name={"Office"} level={5} description={"I'm able to use the most common office softwares such as Microsoft Office, LibreOffice, Google Suite, etc."} technologies={["Microsoft Office", "LibreOffice", "Google Suite"]} />
                    </div>
                  </div>
                </div>
                <div id={styles.mainContentLowerLeftRightPart} className={styles.mainContentLowerLeftRightPart}>
                  <div className={styles.mainContentTitle}>
                    <div className={styles.mainContentTitleText}>
                      Work experience in Entreprises
                      <hr />
                    </div>
                  </div>
                  <div className={styles.mainContentLowerLeftRightPartContent}>
                    <div className={styles.mainContentLowerLeftRightPartContentText}>
                      <WorkFocus name={"Supply Assistant"} status={"Ended"} establishment={"Lidl France, 34500 Béziers, France"} date={"08/2022-01/2023"} accessLink={"https://www.lidl.fr/"} />
                      <WorkFocus name={"Landscaping Assistant"} status={"Ended"} establishment={"AgriGarden, 34350 Vendres, France"} date={"Summers since 2019 to 2021"} accessLink={"#"} />
                    </div>
                  </div>
                  <br />
                  <div className={styles.mainContentTitle}>
                    <div className={styles.mainContentTitleText}>
                      My formation
                      <hr />
                    </div>
                  </div>
                  <div className={styles.mainContentLowerLeftRightPartContent}>
                    <div className={styles.mainContentLowerLeftRightPartContentText}>
                        <FormationFocus name={"Bachelor in Network & Telecommunications"} status={"Studying"} specialties="N/A" establishment={"Institute of Technology of Béziers, 34500 Béziers, France"} date={"2022-2025"} accessLink={"https://www.iutbeziers.fr/"} />
                        <FormationFocus name={"High School Diploma"} status={"Good mention"} specialties={"Mathematics, Numeric and Computer Science, Foreign Language and Culture - English"} establishment={"Highschool Marc Bloch, 34410 Sérignan, France"} date={"2019-2022"} accessLink={"http://www.lyc-bloch-serignan.fr/marcbloch/"} />
                        <FormationFocus name={"General Certificate of Secondary Education"} status={"Very good mention"} specialties="N/A" establishment={"Middle School Marcel Pagnol, 34410 Sérignan, France"} date={"2016-2019"} accessLink={"https://clg-pagnol-serignan.ac-montpellier.fr/"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainContentLowerRight}>
                  <a id={animations.curriculumVitae} className={styles.mainContentLowerRightLower} href='/pdf/en/curriculum-vitae-alexis-opolka.pdf'>
                  Get My Curriculum Vitae in PDF
                </a>
                <div className={styles.mainContentLowerLeftRightPart}>
                <div className={styles.mainContentTitle}>
                  <div className={styles.mainContentTitleText}>
                    My Associative commitments
                    <hr />
                  </div>
                </div>
                <div className={styles.mainContentLowerLeftRightPartContent}>
                  <div className={styles.mainContentLowerLeftRightPartContentText}>
                    <AssociationFocus name={"Heimdall"} status={"Co-President"} establishment={"Heimdall, 34500 Béziers, France"} date={"2023-Present"} accessLink={""} />
                    <AssociationFocus name={"Petits Papiers d'Architecture"} status={"Technical Director"} establishment={"ENSAM, 3400 Montpellier, France"} date={"2022-Present"} accessLink={"https://petitspapiersdarchitecture.fr"} />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
      Chosen specialties: {props.specialties}
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
