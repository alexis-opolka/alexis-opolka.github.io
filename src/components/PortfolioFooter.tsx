import { Box, Text } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";

export default function PortfolioFooter() {

    const footerStyle: BetterSystemStyleObject = {
        color: "neutral.emphasis",
    }

    return(
        <Box sx={footerStyle}>
            <Text sx={{userSelect: "none"}}>
                Copyright &copy; 2020-2023 Alexis Opolka - All Rights Reserved
            </Text>
        </Box>
    )
}