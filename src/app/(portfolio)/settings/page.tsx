"use client"

import { Pagehead, Box, TabNav, Heading } from "@primer/react";
import { useCallback, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";


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

    return(
        <Box sx={panelStyle}>
            <Heading> Themes </Heading>
        </Box>
    )
}