import { BaseStyles, ThemeProvider, Box } from "@primer/react";

export default function GithubPrimerWrapper({
  children
}: {
  children: React.ReactNode
}){

  return(
    <ThemeProvider colorMode={"night"}>
      <BaseStyles>
        {children}
      </BaseStyles>
    </ThemeProvider>
  )
}
