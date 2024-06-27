import { SunIcon, MoonIcon } from '@primer/octicons-react';
import type { Icon } from "@primer/octicons-react";
import { ColorModeWithAuto } from '@primer/react/lib/ThemeProvider';

// Variables & Constants
export const themeSchemes: {
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
  },
  {
    name: 'Light High Contrast',
    value: 'light_high_contrast',
    icon: SunIcon,
  },
  {
    name: 'Dark High Contrast',
    value: 'dark_high_contrast',
    icon: MoonIcon,
  },
  {
    name: 'Light Colorblind',
    value: 'light_colorblind',
    icon: SunIcon,
  },
  {
    name: 'Dark Colorblind',
    value: 'dark_colorblind',
    icon: MoonIcon,
  },
  {
    name: 'Light Tritanopia',
    value: 'light_tritanopia',
    icon: SunIcon,
  },
  {
    name: 'Dark Tritanopia',
    value: 'dark_tritanopia',
    icon: MoonIcon,
  },
];
export const defaultColorValueStorageKey = "PrimerTheme";

export function getColorModeFromLocalStorage(): ColorModeWithAuto | "N/A" {

    let colorValue = Number(localStorage.getItem(defaultColorValueStorageKey)) || "N/A";

    // The return value seems to be correct and persistent
    // only if the below condition is present
    if (colorValue === "N/A") return colorValue;

    if (colorValue === 1) return "dark";
    if (colorValue === 0) return "light";

    return "auto"
}