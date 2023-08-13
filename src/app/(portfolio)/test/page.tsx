"use client"

import { Box } from "@primer/react";
import {t} from "@lingui/macro";

export default function TestPage(){
  return(
    <Box>
      {t`This is a Test Content.`}
    </Box>
  )
}
