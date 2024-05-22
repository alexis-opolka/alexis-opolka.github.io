import { SkillCard } from "@/components/AboutComponents/SkillCard"
import {Box} from "@primer/react"
import { BetterSystemStyleObject } from "@primer/react/lib/sx"
import styles from "@/sass/master.module.sass";
import { PaneTitle } from "../../PaneTitle"

export default function CloudTechCategory(){
    const skillHolderStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        mr: 4
    }

    return(
        <PaneTitle title="Cloud Technologies" description={"Cloud native solutions, containers, VMs, etc."}>
            <Box sx={{display: "flex", maxWidth: "fit-content"}} className={styles.test}>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"cloudtech"}
                        skillName={"Shell"} /** We cheat a bit here, but shush */
                        displayName={"Kubernetes"}
                        skillLevel={40}
                        skillDescription={"Kubernetes, K8S or Kube."}
                    />
                    <SkillCard
                        type={"cloudtech"}
                        skillName={"Dockerfile"}
                        displayName={"Docker"}
                        skillLevel={40}
                        skillDescription={"The most popular containerization solution, Docker."}
                    />
                </Box>
                <Box sx={skillHolderStyle}>
                    <SkillCard
                        type={"cloudtech"}
                        skillName={"VMware"}
                        skillLevel={40}
                        skillDescription={"VMware products, mainly Workstation, Player and ESXi."}
                    />
                    <SkillCard
                        type={"cloudtech"}
                        skillName={"KVM"}
                        skillLevel={30}
                        skillDescription={"Kernel-Based Virtual Machine, a hypervisor for Linux. Present inside the Linux kernel since 2.6.20."}
                    />
                    <SkillCard
                        type={"cloudtech"}
                        skillName={"HyperX"}
                        skillLevel={20}
                        skillDescription={"A hypervisor for Windows, developed by Microsoft."}
                    />
                </Box>
            </Box>
        </PaneTitle>
    )
}