import type { Icon } from "@primer/octicons-react";
import { useTheme, Button, Octicon, Box } from "@primer/react";
import { SunIcon, MoonIcon } from '@primer/octicons-react';
import { useState } from "react";
import { IndexKind } from "typescript";

export function ThemeToggleButton() {
  const { setDayScheme, setNightScheme, setColorMode, colorMode } = useTheme();

  var defaultColorValue;

  // As the `colorMode` can be changed, the default value
  // should also change.
  if (colorMode === "night") {
    defaultColorValue = 1;
  } else {
    defaultColorValue = 0;
  }
  // Using a stateful variable to store the index of the current used scheme
  const [currentPrimerTheme, setCurrentPrimerTheme] = useState(defaultColorValue);

  const schemes: {
    name: string,
    value: string,
    icon: Icon,
    preferred?: boolean | undefined
  }[] = [
      {
        name: 'Light',
        value: 'light',
        icon: SunIcon
      },
      {
        name: 'Dark',
        value: 'dark',
        icon: MoonIcon,
        preferred: true,
      },
      {
        name: 'Dark dimmed',
        value: 'dark_dimmed',
        icon: MoonIcon,
      }
    ];

  console.log(`[LOG]: The current PrimerTheme is ${currentPrimerTheme}, the ColorMode is ${colorMode} and the icon is ${schemes[currentPrimerTheme].icon.displayName}`);

  function toggleTheme() {
    console.log(`The current Theme is: ${currentPrimerTheme}!`)
    if (currentPrimerTheme === 0) {
      // The current Theme is Light and we should change it to Dark
      setColorMode("dark");

      // Now that we set the color mode to be dark,
      // we need to know if the preferred theme is `Dark` (general GitHub dark theme)
      // or `Dark dimmed`.
      // In order to know, we use an argument called `preferred` to know which
      // dark theme is preferred by the user.
      //
      // TODO: Implement a system to automatically choose the preferred theme
      // Should be accessible to the user and be present in the `settings` page.

      setCurrentPrimerTheme(1);
      setSchemesValue(1);
    } else {
      // The current Theme is Dark and we should change it to Light
      setColorMode("light");


      setCurrentPrimerTheme(0);
      setSchemesValue(0)
    };
  };

  function setSchemesValue(newColorMode: IndexKind){
    setDayScheme(schemes[newColorMode].value);
    setNightScheme(schemes[newColorMode].value);
  }

  return (
    <Button variant='invisible' onClick={toggleTheme}>

      <Octicon icon={schemes[currentPrimerTheme].icon} size={20} />

      {/* <Box> The theme ({currentPrimerTheme}) is {schemes[currentPrimerTheme].name} </Box> */}
    </Button>
  )
}
