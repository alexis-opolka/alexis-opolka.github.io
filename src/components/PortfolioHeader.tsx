
// NextJS Imports
import { Header, Avatar, Select, FormControl, Text, Box } from "@primer/react";

// Intern Imports
import { ThemeToggleButton } from "@/components/ThemeComponents";
import { LinguiLocaleChangeForm } from "./wrappers/LinguiJSWrappers";

export default function PortfolioHeader(){
  return(
    <Header sx={{
      paddingBottom: 2,
      bg: "header.default"
    }}>
      <Header.Item full sx={{ textShadow: "shadow.medium" }}>
        <Header.Link href='#'>A/O</Header.Link>
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
