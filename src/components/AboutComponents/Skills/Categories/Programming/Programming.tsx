import { SkillCard } from "@/components/AboutComponents/SkillCard"
import { ProjectsInterface, LibraryInterface } from "@/components/AboutComponents/interfaces"
import { Box } from "@primer/react"
import { BetterSystemStyleObject } from "@primer/react/lib/sx"
import styles from "@/sass/master.module.sass";
import { PaneTitle } from "@/components/AboutComponents/Skills/PaneTitle";

export default function ProgrammingCategory(){

    const skillHolderStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        mr: 4
    }

    const ffbWatcher: ProjectsInterface = {
        name: "FFB Watcher",
        description: "A project made for the FFB (Festival of Fantastic of Béziers) used to track and profile the visitors, stands, and events of the festival. It was made using C++ and ESP32 microcontrollers."
    }
    const libraries: {[key: string]: LibraryInterface} = {
        PyQt5: {
            name: "PyQt5",
            url: "https://www.riverbankcomputing.com/software/pyqt",
        },
        RenPy: {
            name: "Ren'Py",
            url: "https://www.renpy.org/",
        },
        ReactJS: {
            name: "ReactJS",
            url: "https://react.dev"
        },
        NextJS: {
            name: "NextJS",
            url: "https://nextjs.org"
        },
        UnrealEngine: {
            name: "Unreal Engine",
            url: "https://www.unrealengine.com/en-US/"
        },
        Unity: {
            name: "Unity",
            url: "https://unity.com/"
        },
        DotNet: {
            name: ".NET",
            url: "https://dotnet.microsoft.com/"
        }
    }

    return (
        <PaneTitle title={"Programming Languages"}>
            <Box sx={{display: "flex", maxWidth: "100%"}} className={styles.test}>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"programming"}
                        skillName={"Python"}
                        skillLevel={80}
                        skillDescription={"A high-level, general-purpose, interpreted, dynamically typed, and garbage-collected programming language."}
                        reposToShow={["import-cours-but-rt", "apocalyptic-novel"]}
                        librariesToCite={[libraries.PyQt5, libraries.RenPy]}
                    />
                    <SkillCard
                        type={"programming"}
                        skillName={"TypeScript"}
                        skillLevel={60}
                        skillDescription={"JavaScript with syntax for types."}
                        reposToShow={["Mon-Banzaii", "alexis-opolka.github.io"]}
                        librariesToCite={[libraries.ReactJS, libraries.NextJS]}
                    />
                    <SkillCard
                        type={"programming"}
                        skillName={"JavaScript"}
                        skillDescription={"An event-driven, functional, imperative, procedural, object-oriented Just-In-Time compiled programming language."}
                        skillLevel={60}
                        librariesToCite={[libraries.ReactJS, libraries.NextJS]}
                    />
                    <SkillCard
                        type={"scripting"}
                        skillName={"PowerShell"}
                        skillDescription={"A scripting language commonly used for automating the management of systems. It's also used to build, test, and deploy solutions, often in CI/CD environments. Made by Microsoft."}
                        skillLevel={40}
                    />
                </Box>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"programming"}
                        skillName={"C++"}
                        skillDescription={"A high-level, procedural, imperative, functional, object-oriented, generic, modular compiled programming language."}
                        skillLevel={50}
                        projectsToShow={[ffbWatcher]}
                        librariesToCite={[libraries.UnrealEngine]}
                    />
                    <SkillCard
                        type={"programming"}
                        skillName={"C"}
                        skillDescription={"An imperative, structured compiled programming language. Maybe a bit old, but still useful. (You don't let die the great-grandfather that easily)"}
                        skillLevel={30}
                    />
                    <SkillCard
                        type={"programming"}
                        skillName={"C#"}
                        skillDescription={"A structured, imperative, object-oriented, event-driven, task-driven, functional, generic, reflective, concurrent compiled programming language."}
                        skillLevel={20}
                        librariesToCite={[libraries.Unity, libraries.DotNet]}
                    />
                    <SkillCard
                        type={"programming"}
                        skillName={"Sass"}
                        skillDescription={"A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS)."}
                        skillLevel={30}
                    />
                    <SkillCard
                        type={"scripting"}
                        skillName={"Shell"}
                        displayName={"Bash"}
                        skillDescription={"The successor of the Bourne Shell (sh), a Unix shell and command language interpreter."}
                        skillLevel={40}
                    />
                </Box>
            </Box>
        </PaneTitle>
    )
}