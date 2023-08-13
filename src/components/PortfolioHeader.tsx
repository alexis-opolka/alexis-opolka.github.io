
// NextJS Imports
import { Header, Avatar, Select, FormControl, Text, Box, Octicon, Button } from "@primer/react";
import { GearIcon } from "@primer/octicons-react";

// Intern Imports
import { ThemeToggleButton } from "@/components/ThemeComponents";
import { LinguiLocaleChangeForm } from "./wrappers/LinguiJSWrappers";

export default function PortfolioHeader({
  breadCrumbs
}: {
  breadCrumbs: JSX.Element
}){
  return(
    <Header sx={{
      position: 'sticky',
      top: 0,
      height: 64,
      placeItems: 'center',
      backgroundColor: 'header.bg',
      borderBottom: '1px solid',
      borderColor: 'border.default',
      zIndex: 1,
      color: 'fg.default'
    }}>
      <Header.Item full sx={{ textShadow: "shadow.medium"}}>
        {breadCrumbs}
      </Header.Item>
      <Header.Item sx={{ mr: 0 }}>
        <Header.Item sx={{ mr: 2 }}>
          <LinguiLocaleChangeForm />
        </Header.Item>
        <Header.Item sx={{ mr: 2 }}>
          <ThemeToggleButton />
        </Header.Item>
        <Header.Item sx={{ mr: 2, ml: 2 }}>
          <Button as="a" href="/settings" variant="invisible" sx={{ display: "flex", alignItems: "center", color: "header.divider" }}>
            <Octicon icon={GearIcon} />
          </Button>
        </Header.Item>
      </Header.Item>
    </Header>
  )
}
