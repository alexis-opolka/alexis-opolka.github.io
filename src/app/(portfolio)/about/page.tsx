"use client"

// NextJS Imports
import { Avatar, Box, CircleOcticon, Heading, PageLayout, Text, Timeline } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import {ChevronRightIcon} from "@primer/octicons-react";

// Intern Imports
import ProfilePicture from "@/content/img/profile-picture.png";
import { SkillsPart } from "@/components/AboutComponents/Skills";

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
                    <VolunteeringPart />
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
            <Avatar src={ProfilePicture.src} size={256} draggable={false}/>
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
function AboutBodyWrapper({children}: {children: React.ReactNode}){
    return(
        <Box sx={{margin: 4}}>
            {children}
        </Box>
    )
}

// The AboutMePart is the part containing the about me text
// with the list of interests, hobbies, goals, etc.
function AboutMePart(){

    const aboutMePartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
    }

    const aboutMeInteterestsArray: string[] = [
        "Cloud development", "Game development", "Internet of Things",
        "DevOps", "Mental Health (mostly about burnout)", "Entrepreuneurship",
    ]

    return(
        <Box sx={aboutMePartStyle}>
            <Box id="About.AboutMe.Headings" sx={{margin: 2}}>
                <Heading as="h2" sx={{fontSize: 5}}>About Me</Heading>
            </Box>
            <Box id="About.AboutMe.Paragraph" sx={{padding: 15, margin: 2}}>
                <Text sx={{color: "fg.default"}} as={"p"}>
                    I&apos;m a french student with a passion for technology, arts and entrepreuneurship. <br />
                    My main goals are to become a DevOps Engineer, to create my own company and contribute to the society as a whole. <br />
                    I&apos;m interested in many things (if not a lot), but for the most part, it&apos;s about:
                    <Timeline sx={{ml: 2, mt: 3}}>
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
                </Text>
                <Text sx={{color: "fg.default"}} as={"p"}>
                    Meanwhile, you can see me on many projects as a <b>contributor</b>, a <b>project manager</b> or as a <b>leader</b>. <br />
                    I might also be a speaker at some events, a mentor for some students.
                    But don&apos;t worry, I&apos;m not a workaholic. <br />
                    I also have some hobbies like writing & reading stories (mostly fantasy and sci-fi), creating & playing video games,
                    listening to music (mostly Blues/Jazz and Lo-Fi) and experimenting with new technologies.
                </Text>
            </Box>
        </Box>
    )
}

// The SkillsAndExperiencePart is the part containing the skills and experience.
// The Component is divided in two parts and as such, the current component is the wrapper
// for the two parts.
function SkillsAndExperiencePart(){

    const skillsAndExperiencePartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
    }

    // The content should be displayed in a row of unequal height with a divider in the middle
    // The `Box` component should span the whole width of the parent.
    // The divider should be a vertical line.
    const skillsAndExperiencePartContentStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
        padding: 15,
        minWidth: "100%"
    }

    return(
        <Box sx={skillsAndExperiencePartStyle}>
            <Box id="About.SkillsAndExperience.Headings" sx={{margin: 2}}>
                <Heading as="h2" sx={{fontSize: 5}}>Skills & Experience</Heading>
            </Box>
            <Box id="About.SkillsAndExperience.Content" sx={skillsAndExperiencePartContentStyle}>
                <PageLayout id="About.SkillsAndExperience.Content.PageLayout" sx={{width: "100%", display: "flex", flexDirection: "row", flex: "0 0 100%", justifyContent: "center"}}>
                    <PageLayout.Content id="About.SkillsAndExperience.Content.PageLayout.Content" sx={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <SkillsPart />
                    </PageLayout.Content>
                    <PageLayout.Pane divider={"line"} sx={{width: "100%", display: "flex", flexDirection: "column"}}>
                        <ExperiencePart />
                    </PageLayout.Pane>
                </PageLayout>
            </Box>
        </Box>

    )
}



// The ExperiencePart is the part containing the experience timeline.
function ExperiencePart(){

    const experiencePartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
        // border: "1px solid",
        // borderColor: "border.default",
    }

    return(
        <Box id="About.SkillsAndExperience.Experience" sx={experiencePartStyle}>
            <Box id="About.SkillsAndExperience.Experience.Headings" sx={{margin: 2}}>
                <Text as={"h3"} sx={{fontSize: 3}}> My Experience </Text>
            </Box>
        </Box>
    )
}

// The EducationPart is the part containing the education timeline.
function EducationPart(){

    const educationPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
    }

    return(
        <Box>This is the education part.</Box>
    )
}

// The VolunteeringPart is the part containing the volunteering timeline.
function VolunteeringPart(){

    const volunteeringPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
    }

    return(
        <Box>This is the volunteering part.</Box>
    )

}

// Some useful components when writing the about page
function SeparatingSlash({separatingColor}: {separatingColor?: string}){
    return(
        <Box sx={{ml: 1, mr: 1}}>
            <Text sx={{color: separatingColor}}>/</Text>
        </Box>
    )
}