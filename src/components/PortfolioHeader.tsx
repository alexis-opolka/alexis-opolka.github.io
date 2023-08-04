
// NextJS Imports
import { Header, Avatar, Select, FormControl, Text, Box } from "@primer/react";

// Intern Imports
import { ThemeToggleButton } from "@/components/ThemeComponents";
import { LinguiLocaleChangeForm } from "./wrappers/LinguiJSWrappers";

export default function PortfolioHeader(){
  return(
    <Header sx={{
      position: 'sticky',
      top: 0,
      height: 64,
      placeItems: 'center',
      backgroundColor: 'canvas.subtle',
      borderBottom: '1px solid',
      borderColor: 'border.default',
      zIndex: 1,
      color: 'fg.default'
    }}>
      <Header.Item full sx={{ textShadow: "shadow.medium"}}>
        <Header.Link href='#' sx={{color: "fg.default"}}>A/O</Header.Link>
      </Header.Item>
      <Header.Item sx={{ mr: 0 }}>
        <Header.Item sx={{ mr: 2 }}>
          <ThemeToggleButton />
        </Header.Item>
        <Header.Item sx={{ mr: 0 }}>
          <LinguiLocaleChangeForm />
        </Header.Item>
      </Header.Item>
    </Header>
  )
}
