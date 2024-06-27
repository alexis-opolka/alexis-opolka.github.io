import { BaseStyles, ThemeProvider, useTheme } from "@primer/react";
import { getColorModeFromLocalStorage} from "@/components/ThemeComponents";

export default function GithubPrimerWrapper({
  children
}: {
  children: React.ReactNode
}){

  const colorValue = getColorModeFromLocalStorage();  

  console.log("At loading the color value is:", colorValue);

  return(
    <ThemeProvider colorMode={colorValue !== "N/A" ? colorValue : undefined}>
      <BaseStyles>
        {children}
      </BaseStyles>
    </ThemeProvider>
  )
}