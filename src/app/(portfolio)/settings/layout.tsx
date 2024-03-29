"use client"

// NextJS imports
import { PageLayout, Box, Breadcrumbs } from "@primer/react";


// Intern Imports
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioFooter from "@/components/PortfolioFooter";


// Exports (Functions, Components, Variables/Constants)

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {




  const settingsBreadCrumbs = (
    <Breadcrumbs>
        <Breadcrumbs.Item href="/" sx={{color: "header.logo"}}>A/O</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/settings" sx={{color: "header.text"}}>Settings</Breadcrumbs.Item>
    </Breadcrumbs>
  );

  return (
    <Box sx={{ minHeight: "100vh", overflowY: 'auto' }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: 64,
          placeItems: 'center',
          bg: 'header.bg',
          zIndex: 1,
        }}
      >
        <PortfolioHeader breadCrumbs={settingsBreadCrumbs}/>
      </Box>
      <PageLayout sx={{ overflow: "hidden", bg: "canvas.inset" }}>
        <PageLayout.Content>
          <Box sx={{ minHeight: "100vh"}}>
            {children}
          </Box>
        </PageLayout.Content>
        <PageLayout.Footer divider={"line"}>
          <PortfolioFooter />
        </PageLayout.Footer>
      </PageLayout>
    </Box>
  )
}
