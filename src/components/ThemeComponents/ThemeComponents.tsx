import type { Icon } from "@primer/octicons-react";
import { useTheme, Button, Octicon, Box, Header, PageLayout, Link, Text } from "@primer/react";
import { useState } from "react";
import { IndexKind } from "typescript";
import { BetterSystemStyleObject } from "@primer/react/lib/sx";
import { defaultColorValueStorageKey, themeSchemes } from "./utils";

export function ThemeToggleButton() {
  
  const { setDayScheme, setNightScheme, setColorMode, colorMode } = useTheme();
  let defaultColorValue;

  if (localStorage.getItem(defaultColorValueStorageKey) !== null) {
    defaultColorValue = Number(localStorage.getItem(defaultColorValueStorageKey));
  } else {
    // As the `colorMode` can be changed, the default value
    // should also change.
    if (colorMode === "night" || colorMode === "dark") {
      defaultColorValue = 1;
    } else {
      defaultColorValue = 0;
    }

    localStorage.setItem(defaultColorValueStorageKey, "defaultColorValue");
  }


  function HandleCurrentPrimerTheme(newThemeValue: number){

    localStorage.setItem(defaultColorValueStorageKey, newThemeValue.toString());
  }

  function getCurrentPrimerTheme(): number {
    const localStorageValue = localStorage.getItem(defaultColorValueStorageKey) || "-1";
    const returnValue = Number(localStorageValue);

    return returnValue;
  }

  console.log(`[LOG]: The current PrimerTheme is ${getCurrentPrimerTheme()}, the ColorMode is ${colorMode} and the icon is ${themeSchemes[getCurrentPrimerTheme()].icon.displayName}`);

  function setSchemesValue(newColorMode: IndexKind) {
    setDayScheme(themeSchemes[newColorMode].value);
    setNightScheme(themeSchemes[newColorMode].value);
  }
  
  return (
    <ThemeToggleButtonComponent currentPrimerTheme={getCurrentPrimerTheme()}
      colorModeHandler={setColorMode}
      currentPrimerThemeHandler={HandleCurrentPrimerTheme}
      schemesValueHandler={setSchemesValue}
    />
  )
}

function ThemeToggleButtonComponent({
  currentPrimerTheme, colorModeHandler, currentPrimerThemeHandler, schemesValueHandler
  }: {
    currentPrimerTheme: number,
    colorModeHandler: CallableFunction,
    currentPrimerThemeHandler: CallableFunction,
    schemesValueHandler: CallableFunction
  }) {

  function toggleTheme() {
    console.log(`The current Theme is: ${currentPrimerTheme}!`)
    if (currentPrimerTheme === 0) {
      // The current Theme is Light and we should change it to Dark
      colorModeHandler("dark");

      // Now that we set the color mode to be dark,
      // we need to know if the preferred theme is `Dark` (general GitHub dark theme)
      // or `Dark dimmed`.
      // In order to know, we use an argument called `preferred` to know which
      // dark theme is preferred by the user.
      //
      // TODO: Implement a system to automatically choose the preferred theme
      // Should be accessible to the user and be present in the `settings` page.

      currentPrimerThemeHandler(1);
      schemesValueHandler(1);
    } else {
      // The current Theme is Dark and we should change it to Light
      colorModeHandler("light");


      currentPrimerThemeHandler(0);
      schemesValueHandler(0)
    }

  }

  return (

  <Button variant='invisible' onClick={() => {
    toggleTheme()
  }} sx={{ color: "header.divider" }}>
    <Octicon icon={themeSchemes[currentPrimerTheme].icon} size={20} />
  </Button>)
}

export function ThemePreview({scheme}: {scheme: {value: string, name: string, icon: Icon}}){

  const themePreviewStyle: BetterSystemStyleObject = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor: "border.default",
    borderRadius: "1rem",
    margin: "1rem",
    width: "20%",
    height: "20%",
    bg: "canvas.inset"
  }
  // We are referencing all the theme values from the theme to preview
  const {theme} = useTheme();
  const themeToPreview = theme?.["colorSchemes"]?.[scheme.value]?.["colors"];

  // Styles for the whole page
  const backgroundColor = themeToPreview?.["canvas"]?.["default"];
  const fgColor = themeToPreview?.["fg"]?.["default"];

  // Styles for the header
  const headerBgColor = themeToPreview?.["header"]?.["bg"];
  const headerTextColor = themeToPreview?.["header"]?.["text"];
  const headerFontSize = themeToPreview?.["fontSizes"]?.["2"];

  // Styles for the body
  const contentTextColor = themeToPreview?.["fg"]?.["default"];
  const contentLinkColor = themeToPreview?.["fg"]?.["accent"];

  // Styles for the footer
  const footerBgColor = themeToPreview?.["footer"]?.["bg"];
  const footerTextColor = themeToPreview?.["neutral"]?.["emphasis"];
  const footerFontSize = themeToPreview?.["fontSizes"]?.["0"];

  // console.debug(themeToPreview, backgroundColor)

  return(
      <Box id={`settings.Theme.ThemePreview.${scheme.value}`} sx={themePreviewStyle}>
        <Text> {scheme.name} </Text>
        <Box>
          <PageLayout sx={{
            backgroundColor: backgroundColor,
            color: fgColor,
            padding: 0,
            borderRadius: "1rem",
            border: "1px solid",
            borderColor: "border.default",
            width: "100%",
            top: 0,
            userSelect: "none",
          }}>
            <PageLayout.Header>
              <Header sx={{
                backgroundColor: headerBgColor,
                color: headerTextColor,
                border: "1px solid",
                borderColor: "border.default",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
                fontSize: headerFontSize,
              }}>
                This is the Header
              </Header>
            </PageLayout.Header>
            <PageLayout.Content sx={{
              backgroundColor: backgroundColor,
              color: contentTextColor,
              padding: 15,
            }}>
              This is the Content with a <Link href={`#settings.Theme.ThemePreview.${scheme.value}`} sx={{
                color: contentLinkColor
              }}>
                link
              </Link>.
            </PageLayout.Content>
            <PageLayout.Footer sx={{
              backgroundColor: footerBgColor,
              color: footerTextColor,
              padding: 15,
              fontSize: footerFontSize,
            }} divider={"line"}>
              <Text as={"span"} sx={{fontSize: footerFontSize}}>Copyright &copy; 2023 Preview Footer - All Rights Reserved</Text>
            </PageLayout.Footer>
          </PageLayout>
        </Box>
      </Box>
  )
}
