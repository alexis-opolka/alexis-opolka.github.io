
// NextJS imports
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import {Box, Heading, ProgressBar, Text, Truncate, Link} from "@primer/react";
import { useEffect, useState } from "react";

// Intern Imports
import { ProjectsInterface, LibraryInterface } from "../interfaces";
import styles from "@/sass/master.module.sass";
import githubLinguist from '../libs/github-linguist.yaml'; // <-- Should produce an error (or at least a warning) because it can't find its module or type declaractions


// The SkillCard component is a component that displays a skill, its level (using a progress bar),
// a short description, a list of projects (retrieved from the GitHub API) containing the Skill, and a used percentage
// (once again, using both the GitHub API and the progress bar)
export default function SkillCard({
    type,
    skillName,
    displayName,
    skillDescription,
    skillLevel,
    reposToShow,
    projectsToShow,
    librariesToCite,
    url,
}: {
    type: string,
    skillName: string,
    displayName?: string,
    skillDescription: string,
    skillLevel: number,
    reposToShow?: string[],
    projectsToShow?: ProjectsInterface[],
    librariesToCite?: LibraryInterface[],
    url?: string,
}){


    // Stylesheets for common objects in the rendering
    const skillStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        color: "text.primary",
        width: "auto",
        padding: 15,
        mt: 4,
        mb: 4,
        backgroundColor: "canvas.inset",
        boxShadow: "shadow.medium",
        borderRadius: 2,
        flexWrap: "wrap",
    }
    const projectsHolderStyle: BetterSystemStyleObject = {
        maxWidth: "90%",
        flexDirection: "column",
        display: "flex"
    }
    const projectsHolderTitleStyle: BetterSystemStyleObject = {
        fontSize: 2,
        mb: 2,
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
        flexWrap: "wrap"
    }

    // IDs and HtmlDivElement-related manipulations
    const baseID = `About.SkillsAndExperience.Skills.Skill.${skillName}`;

    return(
        <Box sx={{maxWidth: "100%", maxHeight: "40%"}}>
            <Box id={baseID} sx={skillStyle}>

                <Box id={baseID + ".Headings"}>
                    {type === "envntools" && url? (
                        <Link target="_blank" href={url} sx={{color: "fg.default"}}>
                            <Heading as={"h3"} sx={{fontSize: 3}}>
                                {
                                    // If the displayName is set, show it, otherwise show the skillName
                                    displayName? displayName : skillName
                                }
                            </Heading>
                        </Link>
                    )
                    : (
                        <Heading as={"h3"} sx={{fontSize: 3}}>
                            {
                                // If the displayName is set, show it, otherwise show the skillName
                                displayName? displayName : skillName
                            }
                        </Heading>
                    )
                    }
                    <Heading as={"h4"} sx={{fontSize: 1, color: "fg.subtle", ml: 1}}> {skillDescription} </Heading>
                </Box>

                <Box id={baseID + ".ProgressBar"} sx={{width: "100%", padding: 2, mt: 2}}>
                    <ProgressBar aria-label={`The level of the ${skillName} skill`}>
                        {
                            // The skill is a language recorded in the github-linguist file
                            // We can then retrieve its color
                            githubLinguist[skillName] && (
                                <ProgressBar.Item progress={skillLevel} sx={{ backgroundColor: githubLinguist[skillName].color }} />
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
                    <Heading as={"h6"} sx={{color: "fg.muted", fontSize: 0}}>{skillLevel}%</Heading>
                </Box>

                {type === "programming" && (
                    <Box id={baseID + ".Programming"} sx={{maxWidth: "100%"}}>
                        {/* 
                        We want to show either some related repositories (e.g. GitHub, GitLab) or we want to show short Projects (e.g. FFB-Watcher).
                        We can't have both set at the same time.
                        */}

                        {!projectsToShow && reposToShow? (
                            <Box id={baseID + ".Programming.ShowcaseProjects"} sx={projectsHolderStyle}>
                                <Heading as={"h4"} sx={projectsHolderTitleStyle}>Related Projects</Heading>
                                {
                                reposToShow.map((repository, repoIndex) => {
                                    return (
                                        <ShowGithubRepositoryRelatedToSkill key={repoIndex} id={baseID + ".Programming.ShowcaseProjects." + repository} repoName={repository} />
                                    )
                                })
                                }
                            </Box>
                        ) : null}
                        {projectsToShow? (
                            <Box id={baseID + ".Programming.ShowcaseProjects"} sx={projectsHolderStyle}>
                                <Heading as={"h4"} sx={projectsHolderTitleStyle}>Related Projects</Heading>
                                {
                                projectsToShow.map((project, projectIndex) => {
                                    return (
                                        <ShowProjectRelatedToSkill key={projectIndex} id={baseID + ".Programming.ShowcaseProjects." + project.name} project={project} />
                                    )
                                })
                                }
                            </Box>
                        ) : null}

                        {/*
                        We want to show some libraries / frameworks used in these languages
                        */}

                        {librariesToCite? (
                            <Box id={baseID + ".Programming.Libraries"} sx={projectsHolderStyle}>
                                <Heading as={"h4"} sx={projectsHolderTitleStyle}>Related Libraries / Frameworks / Engines</Heading>

                                <Box sx={{display: "flex", flexDirection: "row"}}>
                                    {
                                        librariesToCite.map((library, libraryIndex) => {
                                            let endCharacter = "";
                                            if (libraryIndex+1 < librariesToCite.length) {
                                                endCharacter = ",";
                                            } else {
                                                endCharacter = "";
                                            }

                                            return (
                                                <Text key={libraryIndex}>
                                                    <Link
                                                        id={baseID + ".Programming.Libraries." + library}
                                                        target="_blank"
                                                        href={library.url? library.url : `https://duckduckgo.com/search?q=${library}`}
                                                        sx={{color: "fg.muted"}}
                                                    >
                                                        {library.name}
                                                    </Link>
                                                    {endCharacter} &nbsp;
                                                </Text>
                                            )

                                        })
                                    }
                                </Box>
                            </Box>
                        ) : null}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

function ShowGithubRepositoryRelatedToSkill({
    id,
    repoName
}: {
    id: string,
    repoName: string
}){

    // We first define the stateful variable that will contain the JSX
    const [githubRepoStateful, setGithubRepoStateful] = useState<JSX.Element>(<></>);

    useEffect(() => {

        // Request the NextJS API route `/api/github-requests/projects/[name]` with a GET request
        // and return the component based on what we received
        fetch(`/api/github-requests/projects/${repoName.toLowerCase()}`, {
            method: "GET",
            headers: {
            'Content-Type': 'application/json',
            },
        }).then((response) => response.json()).then((responseJSON) => {
            const repository = responseJSON.data.repository;

            const repositoryName = repository.name;
            const repositoryDescription = repository.description;
            const repositoryOwner = repository.owner;

            const repositoryLicense = repository.licenseInfo;


            setGithubRepoStateful(
                <Box sx={{
                    ml: 2,
                    mb: 2,
                    border: "1px solid",
                    borderColor: "border.muted",
                    borderRadius: "1rem",
                    padding: 2,
                    maxWidth: "100%",
                }}>

                    <Heading as={"h4"} sx={{ fontSize: 2, display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <Link href={repository.url} sx={{ color: "fg.default" }}>{repositoryName}</Link>
                        {repositoryLicense && (
                            <Box id={id + repoName + ".License"}>
                                <Link target="_blank" href={repositoryLicense.url}>{repositoryLicense.nickname ? repositoryLicense.nickname : repositoryLicense.name}</Link>
                            </Box>
                        )}
                    </Heading>

                    <Heading as={"h5"} sx={{ fontSize: 1, color: "fg.subtle" }}>
                        <Truncate title={repositoryDescription} maxWidth={350}>
                            {repositoryDescription}
                        </Truncate>
                    </Heading>

                    <Heading as={"h6"} sx={{ fontSize: 0, color: "fg.subtle", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                        <Box>
                            <Link target="_blank" href={repositoryOwner.url} sx={{
                                color: "fg.muted"
                            }}>@{repositoryOwner.login}</Link>
                        </Box>

                        <ProgressBar sx={{width: "60%", margin: 1}}>
                            {repository.languages.edges.map((languageNode: any, nodeID: number) => {

                                // We're creating the language programming bar you can see on GitHub.
                                // It is, for me, quite common and typical of a git repository to have
                                // a progress bar showing you the percentage of use of a certain language.
                                const languagePercentage = (languageNode.size / repository.languages.totalSize) * 100;
                                const languageColor = languageNode.node.color;

                                // console.debug("language node:", languageNode, languagePercentage, languageColor);

                                return (
                                    <ProgressBar.Item key={nodeID}
                                        progress={languagePercentage}
                                        sx={{ backgroundColor: languageColor }}
                                    />
                                )
                            })}
                        </ProgressBar>
                    </Heading>
                </Box>
            );
        });
        console.debug("I'm a react hook, and i've been called!")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return githubRepoStateful
}

function ShowProjectRelatedToSkill({
    id,
    project
}: {
    id: string,
    project: ProjectsInterface
}){

    return(
        <Box sx={{
            ml: 2,
            mb: 2,
            border: "1px solid",
            borderColor: "border.muted",
            borderRadius: "1rem",
            padding: 2,
            maxWidth: "100%",
        }} id={id}>

            <Heading as={"h4"} sx={{ fontSize: 2, display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Text sx={{ color: "fg.default" }}>{project.name}</Text>
            </Heading>

            <Heading as={"h5"} sx={{ fontSize: 1, color: "fg.subtle" }}>
                {project.description}
            </Heading>
        </Box>
    )
}