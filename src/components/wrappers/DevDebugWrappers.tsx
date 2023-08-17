/* eslint-disable @typescript-eslint/no-explicit-any */
// NextJS Imports
import { Box } from "@primer/react";
import { Children } from "react";

export default function DevDebugComponents({
  children
}: {
  children: any
}){

  console.log(`[DEBUG]: ${Children.count(children)}`);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return(
    <Box sx={{
      borderColor: `${getRandomColor()}`,
    }}>
      {children &&
        <DevDebugComponents>
        children
        </DevDebugComponents>}
    </Box>
  )
}
