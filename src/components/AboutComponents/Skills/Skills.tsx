/* eslint-disable @typescript-eslint/no-unused-vars */

// NextJS Imports
import {Box, Heading, Link, ProgressBar, TabNav, Text, Tooltip, Truncate} from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import { useEffect, useState, useCallback, useRef, ReactNode, MutableRefObject, RefObject } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Intern Imports
import { ProgrammingCategory, SysAdminCategory, CloudTechCategory, EnvironmentAndToolsCategory } from "./Categories";



// The SkillsPart is the part containing the skills.
export default function SkillsPart(){

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const skillsPartStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "text.primary",
        maxWidth: "100%",
        padding: 20,
        backgroundColor: "bg.default",
    }

    // We're setting the selected tab to be a stateful variable
    const [programmingLanguagesSelected, setProgrammingLanguagesSelected] = useState(false);
    const [sysadminSelected, setSysadminSelected] = useState(false);
    const [cloudTechnologiesSelected, setCloudTechnologiesSelected] = useState(false);
    const [envrionmentNToolsSelected, setEnvironmentNToolsSelected] = useState(false);

    const createQueryString = useCallback(
        (name: string, value: string) => {
        // eslint-disable-next-line
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
    
        return params.toString()
        },
        [searchParams]
    )

    const activePanel = useRef(null);

    function setSelectedSkill(panel: string){
        if(panel === 'programming-languages'){
            setProgrammingLanguagesSelected(true);
            setSysadminSelected(false);
            setCloudTechnologiesSelected(false);
            setEnvironmentNToolsSelected(false);
        } else
        if(panel === 'sysadmin'){
            setProgrammingLanguagesSelected(false);
            setSysadminSelected(true);
            setCloudTechnologiesSelected(false);
            setEnvironmentNToolsSelected(false);
        } else
        if(panel === 'cloud-technologies'){
            setProgrammingLanguagesSelected(false);
            setSysadminSelected(false);
            setCloudTechnologiesSelected(true);
            setEnvironmentNToolsSelected(false);
        } else
        if (panel === 'environment-and-tools'){
            setProgrammingLanguagesSelected(false);
            setSysadminSelected(false);
            setCloudTechnologiesSelected(false);
            setEnvironmentNToolsSelected(true);
        } else
        if(panel === 'default'){
            setProgrammingLanguagesSelected(false);
            setSysadminSelected(false);
            setCloudTechnologiesSelected(false);
            setEnvironmentNToolsSelected(false);
        }
    }
    function SkillTabNav({
        selected,
        value,
        title,
    }: {
        selected: boolean,
        value: string,
        title: string,
    }){
        return(
            <TabNav.Link
                href={pathname + "?" + createQueryString('skill', value)}
                selected={selected}
            >
                {title}
            </TabNav.Link>
        )
    }

    return(
        <Box id="About.SkillsAndExperience.Skills" sx={skillsPartStyle} ref={activePanel}>
            <Box id="About.SkillsAndExperience.Skills.Headings" sx={{ml: 2, mb: 0, maxWidth: "100%"}}>

                <TabNav
                    id="About.SkillsAndExperience.Skills.Headings.TabNav"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        justifyContent: "center",
                        maxWidth: "100%",
                        overflowX: "scroll",
                    }}
                >
                    <Heading as={"h3"} sx={{fontSize: 4, mr: 4}}> My Skills </Heading>

                    <SkillTabNav selected={programmingLanguagesSelected} value="programming-languages" title={"Programming languages"} />
                    <SkillTabNav selected={sysadminSelected} value="sysadmin" title={"System & Network Administration"} />
                    <SkillTabNav selected={cloudTechnologiesSelected} value="cloud-technologies" title={"Cloud Technologies"} />
                    <SkillTabNav selected={envrionmentNToolsSelected} value="environment-and-tools" title={"Environment & Tools"} />

                </TabNav>
            </Box>

            { // This is the sub-page when the user is on the programming languages skills
              // Or when the user just arrived
                (searchParams.get('skill') === 'programming-languages' || searchParams.get('skill') == null) && <SkillPanel skill={'programming-languages'} panelSetter={setSelectedSkill} SkillComponent={ProgrammingCategory} refVariable={activePanel} /> 
            }
            { // This is the sub-page when the user is on the sysadmin skills
                searchParams.get('skill') === 'sysadmin' && <SkillPanel skill={'sysadmin'} panelSetter={setSelectedSkill} SkillComponent={SysAdminCategory} refVariable={activePanel}/>
            }
            { // This is the sub-page when the user is on the cloud technologies skills
                searchParams.get('skill') === 'cloud-technologies' && <SkillPanel skill={'cloud-technologies'} panelSetter={setSelectedSkill} SkillComponent={CloudTechCategory} refVariable={activePanel}/>
            }
            { // This is the sub-page when the user is on the environment and tools skills
                searchParams.get('skill') === 'environment-and-tools' && <SkillPanel skill={"environment-and-tools"} panelSetter={setSelectedSkill} SkillComponent={EnvironmentAndToolsCategory} refVariable={activePanel}/>
            }


        </Box>
    )
}

// This is the SkillPanel Component, a wrapper for the skills to show in the panel
function SkillPanel({
    skill,
    panelSetter,
    SkillComponent,
    refVariable,
}: {
    skill: string,
    panelSetter: (panel: string) => void,
    SkillComponent: typeof ProgrammingCategory,
    refVariable: RefObject<HTMLDivElement> | null | undefined
}) {
    // We're setting the current selected panel with the current showed skill
    panelSetter(skill);


    useEffect(() => {
        const scrollIntoViewProps: ScrollIntoViewOptions = {
            behavior: "smooth"
        }

        if (refVariable?.current){
            refVariable?.current.scrollIntoView(scrollIntoViewProps)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return(
        <SkillComponent />
    )
}