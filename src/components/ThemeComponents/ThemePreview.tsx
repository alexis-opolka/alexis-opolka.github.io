import type { Icon } from "@primer/octicons-react";
import { useTheme, Box, Header, PageLayout, Link, Text } from "@primer/react";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";

import stylesheets from "./ThemePreview.module.sass";


// Const and variables
const BaseId = "settings.Theme.ThemePreview.";

export function ThemePreview({ scheme }: { scheme: { value: string, name: string, icon: Icon } }) {

    const themePreviewStyle: BetterSystemStyleObject = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        borderColor: "border.default",
        borderRadius: "0.5rem",
        margin: "1rem",
        width: "30%",
        height: "20%",
        bg: "canvas.inset"
    }
    // We are referencing all the theme values from the theme to preview
    const { theme } = useTheme();
    const themeToPreview = theme?.["colorSchemes"]?.[scheme.value]?.["colors"];

    // Styles for the whole page
    const backgroundColor: string = themeToPreview?.["canvas"]?.["default"];
    const focusBackgroundColor: string = themeToPreview?.["canvas"]?.["inset"];
    const fgColor: string = themeToPreview?.["fg"]?.["default"];

    // Styles for the header
    const headerBgColor: string = themeToPreview?.["header"]?.["bg"];
    const headerTextColor: string = themeToPreview?.["header"]?.["text"];
    const headerFontSize: string = themeToPreview?.["fontSizes"]?.["2"];

    // Styles for the body
    const contentTextColor: string = themeToPreview?.["fg"]?.["default"];
    const contentLinkColor: string = themeToPreview?.["accent"]?.["fg"]; // Link
    const contentButtonColor: string = themeToPreview?.["btn"]?.["primary"]?.["bg"]; // Button
    const contentDangerButtonColor: string = themeToPreview?.["danger"]?.["fg"] // Important/Destructive Button
    const contentDivBorder: string = themeToPreview?.["border"]?.["default"]

    // Styles for the footer
    const footerBgColor: string = themeToPreview?.["footer"]?.["bg"];
    const footerTextColor: string = themeToPreview?.["neutral"]?.["emphasis"];
    const footerFontSize: string = themeToPreview?.["fontSizes"]?.["0"];

    // Stylesheets for the components
    const pageLayoutStyle: BetterSystemStyleObject = {
        color: fgColor,
        padding: 0,
        height: 200,
        marginTop: 0,
        userSelect: "none",
        borderTop: "none",
        borderBottomLeftRadius: "0rem",
        borderBottomRightRadius: "0rem",
        position: "relative",
        display: "block"
    };
    const headerStyle: BetterSystemStyleObject = {
        backgroundColor: headerBgColor,
        color: headerTextColor,
        border: "none",
        borderBottom: "1px solid",
        borderBottomColor: "border.default",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
        fontSize: headerFontSize,
        padding: 15,
        marginBottom: 0,
    }
    const contentStyle: BetterSystemStyleObject = {
        backgroundColor: focusBackgroundColor,
        color: contentTextColor,
        padding: 15,
        height: 150
    }
    const footerStyle: BetterSystemStyleObject = {
        backgroundColor: footerBgColor,
        color: footerTextColor,
        padding: 15,
        fontSize: footerFontSize,
        position: "relative"
    }
    const caseTitle: BetterSystemStyleObject = {
        textAlign: "left",
        // border: "1px solid red",
        width: "100%",
        padding: 2
    }

    return (
        <Box id={BaseId + scheme.value} sx={themePreviewStyle}>
            <Box>
                <PageLayout sx={pageLayoutStyle}>
                    <PageLayout.Header sx={headerStyle}>
                        <HeaderText headerColor={headerTextColor}/>
                    </PageLayout.Header>
                    <PageLayout.Content sx={contentStyle}>
                        <PageContent contentColor={contentTextColor} linkStyle={contentLinkColor} buttonAccentColor={contentButtonColor} contentDiv={{
                            border: contentDivBorder,
                            bg: backgroundColor
                        }} buttonDangerColor={contentDangerButtonColor} />
                    </PageLayout.Content>
                </PageLayout>
            </Box>
            <Box id={BaseId + "SchemeTitle"} sx={caseTitle}>
                <Text> {scheme.name} </Text>
            </Box>
        </Box>
    )
}

function HeaderText({headerColor}: {headerColor: string}){

    const headerTextStyle: BetterSystemStyleObject = {
        backgroundColor: headerColor,
        padding: "5px",
        width: 50,
        borderRadius: 5,
        marginRight: 1,
        marginLeft: 1
    }

    return (
        <Box className={stylesheets.ThemePreview}>
            <Box sx={headerTextStyle}></Box>
            <Box sx={headerTextStyle}></Box>
        </Box>
    )
}

function PageContent({
    contentColor, linkStyle, buttonAccentColor, contentDiv, buttonDangerColor
    }: {
    contentColor: string, linkStyle: string, buttonAccentColor: string, contentDiv: {
        border: string,
        bg: string
    }, buttonDangerColor: string
}){

    const contentStyle: BetterSystemStyleObject = {
        backgroundColor: contentColor,
        padding: "5px",
        width: 50,
        borderRadius: 5,
        marginRight: 1,
        marginLeft: 1
    }
    const contentLinkStyle: BetterSystemStyleObject = {
        backgroundColor: linkStyle,
        color: linkStyle,
        padding: "5px",
        width: 50,
        borderRadius: 5,
        marginRight: 1,
        marginLeft: 1
    }

    const buttonHolderStyle: BetterSystemStyleObject = {
        right: 0,
        bottom: 0,
        position: "absolute"
    }

    const buttonStyle: BetterSystemStyleObject = {
        backgroundColor: buttonAccentColor,
        padding: "5px",
        width: 50,
        borderRadius: 5,
    }
    const buttonDangerStyle: BetterSystemStyleObject = {
        backgroundColor: buttonDangerColor,
        padding: "5px",
        width: 50,
        borderRadius: 5,
        marginRight: 1
    }

    const contentMainDivStyle: BetterSystemStyleObject = {
        border: "1px solid",
        borderColor: contentDiv.border,
        backgroundColor: contentDiv.bg,
        borderRadius: "0.5rem",
        marginTop: 2,
        marginBottom: 2,
        width: "80%",
        height: 80
    }

    console.debug("Accent color:", linkStyle)

    return (
        <Box sx={{height: "100%", padding: "5px", position: "relative"}}>
            <Box className={stylesheets.ThemePreview}>
                <Box sx={contentStyle}></Box>
                <Box sx={contentLinkStyle}></Box>
                <Box sx={contentStyle}></Box>
            </Box>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "left"}}>
                <Box sx={contentMainDivStyle}></Box>
            </Box>
            <Box sx={buttonHolderStyle} className={stylesheets.ThemePreview}>
                <Box sx={buttonDangerStyle}></Box>
                <Box sx={buttonStyle}></Box>
            </Box>
        </Box>
    )
}