import { useTheme } from "@primer/react";
import { useState } from "react";

export default function ToggleTheme(){

  const { setColorMode } = useTheme();
  const [currentPrimerTheme, setCurrentPrimerTheme] = useState("dark");


  if (currentPrimerTheme === "dark") {
    setColorMode("light");
    setCurrentPrimerTheme("light");
  } else {
    setColorMode("dark");
    setCurrentPrimerTheme("dark");
  }
}
