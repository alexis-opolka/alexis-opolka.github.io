"use client"

// NextJS Imports
import { Avatar, Box, CircleOcticon, Heading, PageLayout, Text, Timeline } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import {ChevronRightIcon} from "@primer/octicons-react";
import { ReactNode } from "react";

// Intern Imports
import ProfilePicture from "@/content/img/profile-picture.png";
import { SkillsPart } from "@/components/AboutComponents/Skills";
import { ExperiencePart } from "@/components/AboutComponents/Experience";
import { AboutMyEducation } from "@/components/AboutComponents/Education";
import { VolunteeringExperience } from "@/components/AboutComponents/Volunteering";
import {MyInvestment} from "@/components/AboutComponents/Investment";

// Rendering page
export default function AboutPage(){

    return(
        <PageLayout sx={{
            border: "1px solid",
            borderColor: "border.default",
            borderRadius: "1rem",
            bg: "canvas.default"
        }}>
            <PageLayout.Content>
                <IntroductionPart />
                <AboutBodyWrapper>
                    <AboutMePart />
                    <SkillsAndExperiencePart />
                    <EducationPart />
                    <VolunteeringAndInvestmentPart />
                </AboutBodyWrapper>
            </PageLayout.Content>
        </PageLayout>
    )
}

// The IntroductionPart is the part containing the profile picture and some introduction text
function IntroductionPart(){

    const introductionPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        color: "text.primary",
    }

    return(
        <Box sx={introductionPartStyle}>
            <Avatar src={ProfilePicture.src} size={{
                wide: 128
            }} draggable={false} />
            <Box sx={{margin: 2, display: "flex", flexDirection: "column"}}>
                <Box id="About.Introduction.Headings">
                    <Heading as="h1" sx={{fontSize: 6}}>Alexis Opolka</Heading>
                    <Box sx={{display: "flex", flexDirection: "row"}}>
                        <Heading as="h3" sx={{color: "fg.subtle", fontSize: 2}}>Student-Entrepreneur</Heading>
                        <SeparatingSlash separatingColor={"fg.subtle"} />
                        <Heading as="h3" sx={{color: "fg.subtle", fontSize: 2}}>Software Engineer</Heading>
                        <SeparatingSlash separatingColor={"fg.subtle"} />
                        <Heading as="h3" sx={{color: "fg.subtle", fontSize: 2}}>Technical Director</Heading>
                    </Box>
                </Box>
                <Box id="About.Introduction.Paragraph" sx={{padding: 15, margin: 2}}>
                    <Text sx={{color: "fg.default"}}>
                        <Heading as="h5" sx={{fontSize: 4}}>Hi,</Heading>
                        A 2nd year Student-Entrepreneur in Networks & Telecommunications at the IUT Béziers, France.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

// The AboutBodyWrapper is the wrapper for the body of the about page
// It is mainly used to add a margin to the body
function AboutBodyWrapper({children}: {children: ReactNode}){
    return(
        <Box sx={{margin: 4, maxWidth: "100%"}}>
            {children}
        </Box>
    )
}

function AboutSection({id, title, children}: {id: string, title: string, children: ReactNode}){

    const aboutSectionStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
        maxWidth: "100%",
    }

    return(
        <Box id={id} sx={aboutSectionStyle}>
            <Box id={id + ".Headings"} sx={{margin: 2, maxWidth: "100%"}}>
                <Heading as={"h2"} sx={{fontSize: 5, maxWidth: "100%"}}>
                    {title}
                </Heading>
            </Box>
            <Box id={id + ".Content"} sx={{maxWidth: "100%", width: "100%"}}>
                {children}
            </Box>
        </Box>
    )
}

// The AboutMePart is the part containing the about me text
// with the list of interests, hobbies, goals, etc.
function AboutMePart(){

    const aboutMeInteterestsArray: string[] = [
        "Cloud development", "Game development", "Internet of Things",
        "DevOps", "Mental Health (mostly about burnout)", "Entrepreuneurship",
    ]

    return(
        <AboutSection id="About.AboutMe" title="About Me">
            <Box id="About.AboutMe.Paragraph" sx={{padding: 15, margin: 2}}>
                <Text as={"p"}>
                    I&apos;m a french student with a passion for technology, arts and entrepreuneurship. <br />
                    My main goals are to become a DevOps Engineer, to create my own company and contribute to the society as a whole. <br />
                    I&apos;m interested in many things (if not a lot), but for the most part, it&apos;s about:
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Box sx={{flex: "50%"}}>
                            <Timeline sx={{ml: "25%", mt: 3}}>
                                {aboutMeInteterestsArray.map((interest, index) => {
                                    return(
                                        <Timeline.Item key={index}>
                                            <Timeline.Badge>
                                                <CircleOcticon icon={ChevronRightIcon} />
                                            </Timeline.Badge>
                                            <Timeline.Body>
                                                {interest}
                                            </Timeline.Body>
                                        </Timeline.Item>
                                    )
                                })
                                }
                            </Timeline>
                        </Box>
                        <Box sx={{flex: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <Text as={"p"}>
                                Meanwhile, you can see me on many projects as a <b>contributor</b>, a <b>project manager</b> or as a <b>leader</b>. <br />
                                I might also be a speaker at some events, a mentor for some students.
                                But don&apos;t worry, I&apos;m not a workaholic.
                            </Text>
                            <Text as={"p"}>
                                I also have some hobbies like writing & reading stories (mostly fantasy and sci-fi), creating & playing video games,
                                listening to music (mostly Blues/Jazz and Lo-Fi) and experimenting with new technologies.
                            </Text>
                        </Box>
                    </Box>
                </Text>
            </Box>
        </AboutSection>
    )
}

// The SkillsAndExperiencePart is the part containing the skills and experience.
// The Component is divided in two parts and as such, the current component is the wrapper
// for the two parts.
function SkillsAndExperiencePart(){

    return(
        <AboutSection id="About.SkillsAndExperience" title="Skill & Experience">
            <SkillsPart />
            <ExperiencePart />
        </AboutSection>
    )
}

// The EducationPart is the part containing the education timeline.
function EducationPart(){

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const educationPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
    }

    return(
        <AboutSection id="About.Education" title="My Studies">
            <AboutMyEducation />
        </AboutSection>
    )
}

// The VolunteeringAndInvestmentPart is the part containing the volunteering boxes
// and my investments.
function VolunteeringAndInvestmentPart(){

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const volunteeringPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
    }

    return(
        <AboutSection id="About.Volunteering" title="Volunteering & Investment">
            <VolunteeringExperience />
            <MyInvestment />
        </AboutSection>
    )

}

// Some useful components while writing the about page
function SeparatingSlash({separatingColor}: {separatingColor?: string}){
    return(
        <Box sx={{ml: 1, mr: 1}}>
            <Text sx={{color: separatingColor, userSelect: "none"}}>/</Text>
        </Box>
    )
}
