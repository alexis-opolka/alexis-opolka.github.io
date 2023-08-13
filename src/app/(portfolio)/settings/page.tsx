"use client"

import { Pagehead, Box, TabNav, Heading, Text } from "@primer/react";
import { useCallback, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";

// Intern imports
import { ThemePreview, themeSchemes } from "@/components/ThemeComponents";


// variable & constants
const panelStyle: BetterSystemStyleObject = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "1rem",
}


export default function SettingsPages() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
    
        return params.toString()
        },
        [searchParams]
    )

    // We're setting the selected tab to be a stateful variable
    const [profileSelected, setProfileSelected] = useState(false);
    const [themeSelected, setThemeSelected] = useState(false);

    function setSelectedPanel(panel: string){
        if(panel === 'profile'){
            setProfileSelected(true);
            setThemeSelected(false);
        } else
        if(panel === 'themes'){
            setProfileSelected(false);
            setThemeSelected(true);
        } else
        if(panel === 'default'){
            setProfileSelected(false);
            setThemeSelected(false);
        }
    }

    return(
        <Box>
            <Pagehead sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                border: "none"
            }}>
                <TabNav aria-label="Main" style={{border: "none"}}>
                    <Heading sx={{mr: 5}}> Settings </Heading>
                    <TabNav.Link href={pathname + '?' + createQueryString('panel', 'profile')} selected={profileSelected}> Profile </TabNav.Link>
                    <TabNav.Link href={pathname + '?' + createQueryString('panel', 'themes')} selected={themeSelected}> Themes </TabNav.Link>
                </TabNav>
            </Pagehead>

            { // This is the page when the user is on the profile panel
            searchParams.get('panel') === 'profile' && <ProfilePanel panelSetter={setSelectedPanel} />}

            { // This is the page when the user is on the themes panel
            searchParams.get('panel') === 'themes' && <ThemePanel panelSetter={setSelectedPanel} />}

            { // This is the page when the user arrived on the settings page
            searchParams.get('panel') === null && <DefaultPanel panelSetter={setSelectedPanel} />}
        </Box>
    )

}

function DefaultPanel({
    panelSetter
}: {
    panelSetter: Function
}){

    panelSetter('default')

    return(
        <Box sx={panelStyle}>
            <Heading> Welcome to the settings page! </Heading>
        </Box>
    )
}

function ProfilePanel({
    panelSetter
}: {
    panelSetter: Function
}){

    panelSetter('profile')

    return(
        <Box sx={panelStyle}>
            <Heading> Profile </Heading>
        </Box>
    )
}

function ThemePanel({
    panelSetter
}: {
    panelSetter: Function
}){


    panelSetter('themes')

    // We're going to cheat a bit on the display, but
    // we're going to display the themes in a 3x3 grid.
    // And to do that, we're going to create a 2D array
    // of the themes (dynamically), and then we're going to map through
    // the array to display the themes in a 3x3 grid.

    var themeArrayToDisplay = [];

    if (themeSchemes.length%3 === 0){
        for (var i = 0; i < themeSchemes.length; i+=3){
            themeArrayToDisplay.push([themeSchemes[i], themeSchemes[i+1], themeSchemes[i+2]])
        }
    } else {
        for (var i = 0; i < themeSchemes.length; i+=3){
            if (i+2 < themeSchemes.length){
                themeArrayToDisplay.push([themeSchemes[i], themeSchemes[i+1], themeSchemes[i+2]])
            } else {
                themeArrayToDisplay.push([themeSchemes[i], themeSchemes[i+1]])
            }
        }
    }


    return(
        <Box sx={panelStyle}>
            <Heading> Themes </Heading>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
            }}>
                {/** We will display in a 3x3 column a preview of what the theme looks like using a Header, ThemeProvider, Text and Link Component*/}

                {
                    themeArrayToDisplay.map((row, index) => {
                        return(
                            <Box key={index} sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "nowrap",
                                // border: "1px solid silver",
                            }}>
                                {row.map((scheme, index) => {
                                    return(
                                        <ThemePreview key={index} scheme={scheme} />
                                    )
                                })}
                            </Box>
                        )
                    })
                }
                
            </Box>
        </Box>
    )
}