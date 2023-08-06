import { Box, PageLayout } from "@primer/react";
import PortfolioHeader from '../PortfolioHeader';
import PhoneContext from "./PhoneContext";
import PhoneMockup from "@/content/img/Samsung Galaxy S21 5G — Black — Shadow.png"
import Image from "next/image";
import { relative } from "path";

export default function PhoneComponent(){
  return(
    <Box sx={{
      position: "relative",
      textAlign: "center",
      userSelect: "none",
    }}>
      <Image src={PhoneMockup} alt="Samsung Galaxy S21 5G - Black" height={800} width={450} style={{zIndex: 10, width: "100%", position: "relative"}} draggable={false}/>
      <PhoneContext/>
    </Box>
  )
}
