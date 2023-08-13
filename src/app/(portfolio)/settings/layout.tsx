"use client"

// Stylesheets and Types imports
import type { Metadata } from 'next';

// NextJS imports
import { PageLayout, Box, Breadcrumbs } from "@primer/react";


// Intern Imports
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioFooter from "@/components/PortfolioFooter";


// Exports (Functions, Components, Variables/Constants)
export const metadata: Metadata = {
  title: 'Alexis Opolka Portfolio',
  description: 'The website & portfolio of Alexis Opolka',
}

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
          bg: 'pageHeaderBg',
          zIndex: 1,
        }}
      >
        <PortfolioHeader breadCrumbs={settingsBreadCrumbs}/>
      </Box>
      <PageLayout sx={{ overflow: "hidden", bg: "canvas.default" }}>
        <PageLayout.Content sx={{
          border: "border.default",
        }}>
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
