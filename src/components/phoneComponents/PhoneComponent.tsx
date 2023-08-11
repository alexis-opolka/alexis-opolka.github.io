import { Box } from "@primer/react";
import PhoneContext from "./PhoneContext";
import PhoneMockup from "@/content/img/Samsung Galaxy S21 5G — Black — Shadow.png"
import Image from "next/image";

export default function PhoneComponent(){
  return(
    <Box sx={{
      position: "relative",
      textAlign: "center",
      userSelect: "none",
    }}>
      {/* Mockup phone retrieved from Meta's style & design resources */}
      <Image src={PhoneMockup} alt="Samsung Galaxy S21 5G - Black" height={800} width={450} style={{zIndex: 10, width: "100%", position: "relative", pointerEvents: "none"}} draggable={false}/>
      <PhoneContext/>
    </Box>
  )
}
