import { SkillCard } from "@/components/AboutComponents/SkillCard"
import { Box } from "@primer/react"
import { BetterSystemStyleObject } from "@primer/react/lib/sx"
import styles from "@/sass/master.module.sass";
import { PaneTitle } from "../../PaneTitle"

export default function SysAdminCategory(){
    const skillHolderStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        mr: 4,
        maxWidth: "100%"
    }

    return(
        <PaneTitle title="System & Network Administration">
            <Box sx={{display: "flex", maxWidth: "fit-content"}} className={styles.test}>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"sysadmin"}
                        skillName={"Bash"} /** We cheat a bit here, but shush */
                        displayName={"Linux Administration"}
                        skillLevel={80}
                        skillDescription={"It speaks for itself, the administration of Linux systems. (Including RHEL)"}
                    />
                    <SkillCard
                        type={"sysadmin"}
                        skillName={"PowerShell"}
                        displayName={"Windows Administration"}
                        skillLevel={40}
                        skillDescription={"It speaks for itself, the administration of Windows systems."}
                    />
                    <SkillCard
                        type={"network"}
                        skillName={"Cisco Routing & Troubleshooting"}
                        skillLevel={40}
                        skillDescription={"The administration of Cisco equipment, including troubleshooting."}
                    />
                </Box>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"network"}
                        skillName={"Sass"}
                        displayName={"MikroTik Routing & Troubleshooting"}
                        skillLevel={40}
                        skillDescription={"The administration of MikroTik equipment, including troubleshooting."}
                    />
                    <SkillCard
                        type={"sysadmin"}
                        skillName={"Google Cloud Platform (GCP)"}
                        skillLevel={40}
                        skillDescription={"Use at intermediate level of GCP."}
                    />
                    <SkillCard
                        type={"sysadmin"}
                        skillName="Perl"
                        displayName={"Google Workspace"}
                        skillLevel={40}
                        skillDescription={"Administration of Google Workspace Users, Groups, and Resources."}
                    />
                </Box>
            </Box>
        </PaneTitle>
    )
}