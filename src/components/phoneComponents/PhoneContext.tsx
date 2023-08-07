import { Box, Text } from "@primer/react";
import type { BetterSystemStyleObject } from "@primer/react/lib/sx";
import deepmerge from "deepmerge";


/**
 * This is the function that exports the PhoneContext Component.
 * @returns Test
 */
export default function PhoneContext({
  sx
}: {
  sx?: BetterSystemStyleObject
}){
  // This component doesn't take any arguments but wraps all he returns
  // in the PhoneContextManager Component which is in charge of supervising
  // the state of the "game" the player is at on the website.

  const wrapperStyle: BetterSystemStyleObject = {
    backgroundColor: "#000000",
    minWidth: "100%",
    minHeight: "100%",
    borderRadius: "20px",
    padding: "15px",
    zIndex: 1,
    flexGrow: 1,
  }

  return(
    <Box sx={{
      position: "absolute", top: "100%", left: "50%",
      transform: "translate(-50%, -50%)", display: "flex",
      width: 320, height: 700, marginTop: -403, zIndex: 1 }}>
      <Box sx={wrapperStyle}>
        {/* Here should be the text content, for now */}
        <Text>
          Here is the context.
        </Text>
      </Box>
    </Box>
  )
}
