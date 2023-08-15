
// NextJS Imports
import {Box, Heading, Link, ProgressBar, Text, Truncate} from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import { useEffect, useState } from "react";

// Intern Imports
import githubLinguist from './libs/github-linguist.yaml'; // <-- Should produce an error (or at least a warning) because it can't find its module

// The SkillsPart is the part containing the skills.
export function SkillsPart(){


    const skillsPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
        // border: "1px solid",
        // borderColor: "border.default",
        minWidth: "100%",
        padding: 15,
    }

    return(
        <Box id="About.SkillsAndExperience.Skills" sx={skillsPartStyle}>
            <Box id="About.SkillsAndExperience.Skills.Headings" sx={{margin: 2}}>
                <Text as={"h3"} sx={{fontSize: 4}}> My Skills </Text>
            </Box>
            <Box sx={{padding: 5}}>
                <Text as={"h4"} sx={{fontSize: 3}}> Programming Languages </Text>
                <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    <Skill type={"programming"} skillName={"Python"} skillLevel={80} skillDescription={"A high-level, general-purpose, interpreted, dynamically typed, and garbage-collected programming language."} repoToShow="import-cours-but-rt"/>
                    <Skill type={"programming"} skillName={"Typescript"} skillLevel={60} skillDescription={"A JavaScript superset"} repoToShow="Mon-Banzaii" />
                </Box>
            </Box>
        </Box>
    )
}


// The Skill component is a component that displays a skill, its level (using a progress bar),
// a short description, a list of projects (retrieved from the GitHub API) containing the Skill, and a used percentage
// (once again, using both the GitHub API and the progress bar)
function Skill({
    type,
    skillName,
    skillDescription,
    skillLevel,
    repoToShow,
}: {
    type: string,
    skillName: string,
    skillDescription: string,
    skillLevel: number,
    repoToShow: string,
}){

    // We first define the style of the skill component
    // It should ressemble a card, with a border, a shadow, a padding,
    // a margin, a background color (contrasting with the background)
    const skillStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
        width: "100%",
        padding: 15,
        margin: 5,
        backgroundColor: "canvas.inset",
        boxShadow: "shadow.medium",
        borderRadius: 2,
        flexWrap: "wrap",
        maxWidth: "60%",
    }
    const baseID = `About.SkillsAndExperience.Skills.Skill.${skillName}`;

    return(
        <Box id={baseID} sx={skillStyle}>
            <Box id={baseID + ".Headings"}>
                <Heading as={"h3"} sx={{fontSize: 4}}> {skillName} </Heading>
    
                <Heading as={"h4"} sx={{fontSize: 1, color: "fg.subtle", ml: 1}}> {skillDescription} </Heading>
            </Box>
            <Box id={baseID + ".ProgressBar"} sx={{width: "100%", padding: 2, mt: 2}}>
                <ProgressBar aria-label={`The level of the ${skillName} skill`}>
                    {
                        // The skill is a language recorded in the github-linguist file
                        // We can then retrieve its color
                        githubLinguist[skillName] && (
                            <ProgressBar.Item progress={skillLevel} sx={{backgroundColor: githubLinguist[skillName].color}} />
                        )
                    }
                    {
                        // The skill is not a language recorded in the github-linguist file
                        // We don't give any specific color.
                        !githubLinguist[skillName] && (
                            <ProgressBar.Item progress={skillLevel} />
                        )
                    }
                </ProgressBar>
            </Box>
            <Box id={baseID + ".ShowcaseProjects"}>
                <Heading as={"h4"} sx={{fontSize: 3, mb: 2}}>Related Projects</Heading>
                <TestComponent id={baseID + ".ShowcaseProjects"} skillName={skillName} repoName={repoToShow}/>
            </Box>
        </Box>
    )
}

function TestComponent({
    id,
    skillName,
    repoName
}: {
    id: string,
    skillName: string,
    repoName: string
}){

    // We first define the stateful variable that will contain the JSX
    const [githubRepoStateful, setGithubRepoStateful] = useState<JSX.Element>(<></>);
    const [githubRepoObject, setGithubRepoObject] = useState<any>({});

    useEffect(() => {

        // Request the NextJS API route `/api` with a GET request
        // and display the response in the console.
        fetch("/api/github-requests/projects", {
            method: "GET",
            headers: {
            'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseJSON) => {
            const repositories = responseJSON.data.user.repositories.edges;

            repositories.map((repository: any, repoIndex: number) => {
                // console.log(`Repo (${repoIndex}):`, repository.node);
                const repositoryObject = repository.node;

                // We check if the repository name is the one we wanted to show
                if (repositoryObject.name === repoName){
                    console.log(`Repo (${repoIndex}) name:`, repositoryObject.name, repoName, repositoryObject.name === repoName, repositoryObject);
                    repositoryObject.languages.edges.map((language: any, languageIndex: number) => {
                        if (language.node.name === skillName){
                            // console.log(`Language (${languageIndex}):`, language.node, repositoryObject);
                            const repositoryName = repositoryObject.name;
                            const repositoryDescription = repositoryObject.description;
                            const repositoryOwner = repositoryObject.owner.login;

                            const repositoryLicense = repositoryObject.licenseInfo;

                            const repositoryElement = (
                                <Box key={repoIndex} sx={{ml: 2, border: "1px solid", borderColor: "border.muted", borderRadius: "1rem", padding: 2}}>

                                    <Heading as={"h4"} sx={{fontSize: 2, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <Link href={repositoryObject.url} sx={{color: "fg.default"}}>{repositoryName}</Link>
                                        {repositoryLicense && (
                                            <Box id={id + repoName + ".License"}>
                                                <Link href={repositoryLicense.url}>{repositoryLicense.name}</Link>
                                            </Box>
                                        )}
                                    </Heading>

                                    <Heading as={"h5"} sx={{fontSize: 1, color: "fg.subtle"}}>
                                        <Truncate title={repositoryDescription} maxWidth={350}>
                                            {repositoryDescription}
                                        </Truncate>
                                    </Heading>

                                    <Heading as={"h6"} sx={{fontSize: 0, color: "fg.subtle"}}> {repositoryOwner} </Heading>

                                </Box>
                            );
                            setGithubRepoStateful(repositoryElement);
                            setGithubRepoObject(repositoryObject);
                        }
                    })
                }
            })
        });
        console.debug("I'm a react hook, and i've been called!")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Box>
            {githubRepoStateful}
        </Box>
    )
}