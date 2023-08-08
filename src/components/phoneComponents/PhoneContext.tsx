// NextJS Imports
import { Box, Text } from "@primer/react";
import type { BetterSystemStyleObject } from "@primer/react/lib/sx";
import {MdKeyboardArrowLeft, MdOutlineHome, MdMenu} from "react-icons/md";

// Internal imports
import NetworkStatus, { NetworkCarrier } from "@/components/phoneComponents/PhoneStatus/Network";
import BatteryInformation from "@/components/phoneComponents/PhoneStatus/Battery";
import BluetoothStatus from "@/components/phoneComponents/PhoneStatus/Bluetooth";
import NTPLocalTime from "@/components/phoneComponents/PhoneStatus/NTPComponents";



/**
 * This is the function that exports the PhoneContext Component.
 * @returns Test
 */
export default function PhoneContext({
  sx
}: {
  sx?: BetterSystemStyleObject
}){
  // This component doesn't take any arguments (apart from sx) but wraps all he returns
  // in the PhoneContextManager Component which is in charge of supervising
  // the state of the "game" the player is at on the website.

  const wrapperStyle: BetterSystemStyleObject = {
    // We're styling the curent element
    backgroundColor: "#0000000",
    minWidth: "100%",
    minHeight: "100%",
    borderRadius: "20px",
    padding: "15px",
    zIndex: 1,
    flexGrow: 1,
    // We're now styling the children
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  return(
    <Box sx={{
      position: "absolute", top: "100%", left: "50%",
      transform: "translate(-50%, -50%)", display: "flex",
      width: "82%", height: "86%", marginTop: -403, zIndex: 1 }}>
      <Box sx={wrapperStyle}>

        <PhoneContextStatus />
        <PhoneContextContent />
        <PhoneContextControls />

      </Box>
    </Box>
  )
}

function PhoneContextStatus(){
  // This function is the "header" of the phone.
  // It's used to show the current status, etc.
  return(
    <Box sx={{
      // border: "1px solid red",
      flexGrow: 0.1,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "right",
      backgroundColor: "header.bg",
      color: "header.text",
      marginTop: "-5%", // Here to stick to the top of the phone
      height: "2%", // The status should be quite short in term of height,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    }}>
      <Box id="phone.status.left-part" sx={{
        // border: "1px solid cyan",
        flexGrow: 1,
        display: "flex",
        alignItems: "start",
        marginLeft: 2
      }}> <NTPLocalTime />
        &nbsp;{"|"}&nbsp;
        <NetworkCarrier />
      </Box>
      <Box id="phone.status.right-part" sx={{
        display: "flex",
        marginRight: 2,
        // border: "1px solid green"
      }}>
        <BluetoothStatus />
        <NetworkStatus connected={true} connectivity="good"/>
        <BatteryInformation />
      </Box>
    </Box>
  )
}

function PhoneContextContent(){
  // This function is the body of the phone.
  // It's used to show the current content
  // and it's the main interactive part of the phone.

  return(
    <Box sx={{
      border: "1px solid cyan",
      flexGrow: 3,
      width: "100%"
    }}>
      This should be the Body
    </Box>
  )
}

function PhoneContextControls(){
  // This function is the "footer" of the phone.
  // It's used to show the different controls
  // we await from a phone (e.g. Return, Home, Processes).

  return(
    <Box sx={{
      border: "1px solid green",
      flexGrow: 0.1,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      maxHeight: "7%",
      marginBottom: "-4%"
    }}>
      <Box sx={{
        flexGrow: 1
      }}>
        <MdKeyboardArrowLeft size={40} />
      </Box>
      <Box sx={{
        flexGrow: 1
      }}>
        <MdOutlineHome size={40} />
      </Box>
      <Box sx={{
        flexGrow: 1
      }}>
        <MdMenu size={40} />
      </Box>
    </Box>
  )
}
