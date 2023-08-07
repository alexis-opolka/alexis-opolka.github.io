import { Box } from "@primer/react";
import { IoBatteryFullOutline } from "react-icons/io5";


export default function BatteryInformation(){

  return(
    <Box>
      <IoBatteryFullOutline style={{
        transform: "rotate(180deg)",
        marginLeft: 5,
        marginRight: 5
      }} />
    </Box>
  )
}
