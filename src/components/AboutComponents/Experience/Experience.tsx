// NextJS Imports
import { Box, Heading, Avatar, Link } from "@primer/react"
import { BetterSystemStyleObject } from "@primer/react/lib/sx"
import { StaticImageData } from "next/image"

// Intern Imports
import LogoUM from "@/content/img/universite_de_montpellier_logo.jpg"
import LidlFranceLogo from "@/content/img/lidl_france_logo.jpg";
import PetitsPapiersDarchiLogo from "@/content/img/petits_papiers_darchi_logo.jpg";
import styles from "@/sass/master.module.sass";

// The ExperiencePart is the part containing the experience timeline.
export default function ExperiencePart(){

    const experiencePartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
        maxWidth: "100%",
        padding: 20,
        backgroundColor: "bg.default",
    }

    return(
        <Box id="About.SkillsAndExperience.Experience" sx={experiencePartStyle}>
            <Box id="About.SkillsAndExperience.Experience.Headings" sx={{ml: 2, mb: 0, maxWidth: "100%"}}>
                <Link href='#About.SkillsAndExperience.Experience' sx={{color: "fg.default"}}>
                    <Heading as={"h3"} sx={{fontSize: 4, mr: 4}}> My Work Experience </Heading>
                </Link>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} className={styles.ResponsiveCard}>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <ExperienceCard jobTitle="Student-Entrepreneur" date="1st January 2023 - Present" />
                    <ExperienceCard jobTitle="Technical Director" company="Petits Papiers d'Architecture" companyLogo={PetitsPapiersDarchiLogo} date="1st August 2022 - Present" />
                </Box>
                <Box>
                    <ExperienceCard jobTitle="SCUIO-IP Information Officer" company="University of Montpellier" companyLogo={LogoUM} date="3rd July - 21th July 2023"/>
                    <ExperienceCard jobTitle="Supply Assistant" company="Lidl France" companyLogo={LidlFranceLogo} date="1st August 2022 - 22nd January 2023" />
                    <ExperienceCard jobTitle="Landscaping Assitant" company="Agri Garden" date="Summers from 2019 to 2021" />
                </Box>
            </Box>
        </Box>
    )
}

// Experienceard Component
function ExperienceCard({
    jobTitle,
    company,
    companyLogo,
    date,
}: {
    jobTitle: string,
    company?: string,
    /** The logo of the company */
    companyLogo?: StaticImageData,
    date: string,
}){

    const expCardStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
        width: "auto",
        padding: 15,
        margin: 4,
        backgroundColor: "canvas.inset",
        boxShadow: "shadow.medium",
        borderRadius: 2,
        flexWrap: "wrap",
    }
    const expHeadingStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }

    return(
        <Box sx={expCardStyle} className={styles.ResponsiveSkillCard}>
            <Box sx={expHeadingStyle}>
                <Heading as={"h4"} sx={{fontSize: 3, mr: 4}}>{jobTitle}</Heading>
                <Heading as={"h5"} sx={{fontSize: 2, color: "fg.subtle"}}>{date}</Heading>
            </Box>
            <Box sx={expHeadingStyle}>
                {companyLogo && <Avatar src={companyLogo.src} square={true} sx={{mr: 2}}/>}
                <Heading as={"h6"} sx={{fontSize: 1}}>{company}</Heading>
            </Box>
        </Box>
    )
}