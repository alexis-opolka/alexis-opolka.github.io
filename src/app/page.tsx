"use client"

// Import stylesheets, types and images
import styles from '/public/stylesheets/master.module.css';
import MarkGithubIcon from '@/app/content/img/github-mark-white.svg';
import type {Icon} from "@primer/octicons-react";

// NextJS Imports
import { t } from '@lingui/macro';
import { Box, PageLayout, Header, Octicon, Avatar, Link, Button, useTheme } from '@primer/react';
import { SunIcon, MoonIcon} from "@primer/octicons-react";
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <Header sx={{
      paddingBottom: 2,
      borderBottomWidth: 1,
      borderBottomColor: 'border.default',
      borderBottomStyle: 'solid',
    }}>
      <Header.Item full sx={{textShadow: "shadow.medium"}}>Menu</Header.Item>
      <Header.Item sx={{ mr: 0 }}>
        <Header.Item sx={{mr: 2}}>
          <ThemeToggleButton />
        </Header.Item>
        <Header.Item sx={{mr: 0}}>
          <Avatar src="https://github.com/octocat.png" size={20} square alt="@octocat" />
        </Header.Item>
      </Header.Item>
    </Header>
  )
}

function ThemeToggleButton(){
  const { setDayScheme, setNightScheme, setColorMode } = useTheme();
  // Using a stateful variable to store the index of the current used scheme
  const [currentPrimerTheme, setCurrentPrimerTheme] = useState(0);

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


  function toggleTheme(){
    if (currentPrimerTheme === 0) {
      setColorMode("dark");

      // Now that we set the color mode to be dark,
      // we need to know if the preferred theme is `Dark` (general GitHub dark theme)
      // or `Dark dimmed`.
      // In order to know, we use an argument called `preferred` to know which
      // dark theme is preferred by the user.

      setCurrentPrimerTheme(1);
    } else {
      setColorMode("light");

      setCurrentPrimerTheme(0);
    };
    setDayScheme(schemes[currentPrimerTheme].value);
    setNightScheme(schemes[currentPrimerTheme].value);
  };

  return(
    <Button variant='invisible' onClick={toggleTheme}>

      <Octicon icon={schemes[currentPrimerTheme].icon} size={20} />

      <Box> The theme ({currentPrimerTheme}) is {schemes[currentPrimerTheme].name} </Box>
    </Button>
  )
}
