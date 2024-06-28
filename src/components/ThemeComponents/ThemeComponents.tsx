import { useTheme, Button, Octicon } from "@primer/react";
import { IndexKind } from "typescript";
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