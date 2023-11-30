import { Box, Heading } from "@primer/react"
import { ReactNode } from "react"

export default function PaneTitle({
    title,
    description,
    children,
}: {
    title: string,
    description?: string, // Optional description of the pane
    children: ReactNode
}) {
    return(
        <Box sx={{ padding: 20, display: "flex", flexDirection: "column", minWidth: "60%", maxWidth: "100%", flexWrap: "wrap" }}>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "baseline"}}>
                <Heading as={"h4"} sx={{ fontSize: 3, mr: 2, maxWidth: "100%", width: "100%" }}>
                    {title}
                    <Heading as={"h5"} sx={{ fontSize: 0, color: "fg.muted" }}> {description} </Heading>
                </Heading>
            </Box>
            {children}
        </Box>
    )
}