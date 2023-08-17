import { SkillCard } from "@/components/AboutComponents/SkillCard"
import {Box} from "@primer/react"
import { BetterSystemStyleObject } from "@primer/react/lib/sx"
import styles from "@/sass/master.module.sass";
import { PaneTitle } from "../../PaneTitle"

export default function EnvironmentAndToolsCategory(){
    const skillHolderStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        mr: 4
    }

    return(
        <PaneTitle title="Environments and Tools" description={"(i.e. What I have experience using)"}>
            <Box sx={{display: "flex", maxWidth: "fit-content"}} className={styles.test}>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"envntools"}
                        skillName={"C"} /** We cheat a bit here, but shush */
                        displayName={"GitHub"}
                        skillLevel={80}
                        skillDescription={"GitHub, the most popular Git hosting service."}
                        url={"https://github.com"}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"C++"}
                        displayName={"GitLab"}
                        skillLevel={40}
                        skillDescription={"Well, GitLab, the second most popular Git hosting service."}
                        url={"https://about.gitlab.com"}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Python"}
                        displayName={"BitBucket"}
                        skillLevel={40}
                        skillDescription={"Well, BitBucket, the third most popular Git hosting service, by Atlassian."}
                        url={"https://bitbucket.org"}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Shell"}
                        displayName={"Gitea"}
                        skillLevel={60}
                        skillDescription={"The easier to get a light-weight git server running in no time (even at home)."}
                        url={"https://about.gitea.com"}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"TypeScript"}
                        displayName={"GitKraken"}
                        skillLevel={60}
                        skillDescription={"I use it exclusively to solve merge conflicts, no more, no less. (Some arrangments can be made, if necessary)"}
                        url={"https://www.gitkraken.com/"}
                    />
                </Box>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"envntools"}
                        skillName={"Microsoft Office"}
                        skillLevel={40}
                        skillDescription={"It's Microsoft Office. What else do you want me to say?"}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Ruby"}
                        displayName={"Libre Office"}
                        skillLevel={40}
                        skillDescription={"Microsoft Office but free and Open-Source."}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Google Suite"}
                        skillLevel={40}
                        skillDescription={"Exactly what you think it is. Google's Office suite, the same as Microsoft Office, but in the cloud."}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName="TypeScript"
                        displayName={"Visual Studio / Visual Studio Code"}
                        skillLevel={80}
                        skillDescription={"The IDE by Microsoft. The first proprietary and the second Open-Source."}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Pycharm Professional"}
                        skillLevel={50}
                        skillDescription={"Yes, I use Pycharm Professional. I'm a student, I get it for free."}
                    />
                </Box>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"envntools"}
                        skillName={"Ren'Py"}
                        skillLevel={60}
                        skillDescription={"A Visual Novel engine based on Python."}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Rust"}
                        displayName={"Unity"}
                        skillLevel={25}
                        skillDescription={"A game engine I'm learning to use. (In C#)"}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Swift"}
                        displayName={"Unreal Engine"}
                        skillLevel={25}
                        skillDescription={"A game engine I'm also learning to use. (In C++)"}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName="Eiffel" // I don't know this language, but found it funny to have a "skillName" being "Eiffel"
                        displayName={"Linux Fedora (38+)"}
                        skillLevel={90}
                        skillDescription={"Yes, I use Fedora. Yes, I know."}
                    />
                    <SkillCard
                        type={"envntools"}
                        skillName={"Windows (11+)"}
                        skillLevel={40}
                        skillDescription={"Yes, If you add both Linux and Windows, you get more than 100%, I know."}
                    />
                </Box>
            </Box>
        </PaneTitle>
    )
}