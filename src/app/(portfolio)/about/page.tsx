"use client"

// NextJS imports
import { PageLayout, Box, Breadcrumbs } from "@primer/react";
import React, {useState, Dispatch, SetStateAction} from "react";



// Intern Imports
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioFooter from "@/components/PortfolioFooter";
import StaticAboutPage from "@/app/(portfolio)/about/(structureA)/components";
import DynamicAboutPage from "@/app/(portfolio)/about/(structureB)/components";

export default function AboutPageMainComponent() {

    // Two states are to be expected:
    //      - Static  <- The formal and main state of the page
    //      - Dynamic <- The state where a bit of everything is displaced and destructured (The one to be added for now)
  const [currentPageState, setCurrentPageState] = useState<string>("dynamic")


  const AboutBreadCrumbs = (
    <Breadcrumbs>
        <Breadcrumbs.Item href="/" sx={{color: "header.logo"}}>A/O</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/about" sx={{color: "header.text"}}>About</Breadcrumbs.Item>
    </Breadcrumbs>
  );

  return (
    <Box sx={{ minHeight: "100vh", overflowY: 'hidden' }}>
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
        <PortfolioHeader breadCrumbs={AboutBreadCrumbs} stateControls={[currentPageState, setCurrentPageState]}/>
      </Box>

      {
          currentPageState === "dynamic" ? (
              <Box sx={{ minHeight: "100vh", bg: "canvas.inset"}}>
                  <DynamicAboutPage />
              </Box>
              ) : (
              <PageLayout sx={{ overflow: "hidden", bg: "canvas.inset" }}>
                <PageLayout.Content sx={{
                  border: "border.default",
                }}>
                  <Box sx={{ minHeight: "100vh", width: "100%"}}>
                    <StaticAboutPage />
                  </Box>
                </PageLayout.Content>
                <PageLayout.Footer divider={"line"}>
                  <PortfolioFooter />
                </PageLayout.Footer>
              </PageLayout>
          )
      }
    </Box>
  )
}

