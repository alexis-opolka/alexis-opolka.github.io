"use client"

// Stylesheets and Types imports
import type { Metadata } from 'next';

// NextJS imports
import { PageLayout, Box, Breadcrumbs } from "@primer/react";


// Intern Imports
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioFooter from "@/components/PortfolioFooter";


// Exports (Functions, Components, Variables/Constants)
const metadata: Metadata = {
  title: 'Alexis Opolka Portfolio',
  description: 'The website & portfolio of Alexis Opolka',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {




  const AboutBreadCrumbs = (
    <Breadcrumbs>
        <Breadcrumbs.Item href="/" sx={{color: "header.logo"}}>A/O</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/about" sx={{color: "header.text"}}>About</Breadcrumbs.Item>
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
        <PortfolioHeader breadCrumbs={AboutBreadCrumbs}/>
      </Box>
      <PageLayout sx={{ overflow: "hidden", bg: "canvas.inset" }}>
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
