import { BaseStyles, ThemeProvider, Box } from "@primer/react";

export default function GithubPrimerWrapper({children}: {
  children: React.ReactNode
}){

  return(
    <ThemeProvider colorMode={"day"}>
      <BaseStyles>
        <Box sx={{bg: "canvas.default"}}>
          {children}
        </Box>
      </BaseStyles>
    </ThemeProvider>
  )
}
