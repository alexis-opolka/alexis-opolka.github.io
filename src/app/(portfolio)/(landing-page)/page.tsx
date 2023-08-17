"use client"

// NextJS Imports
import { Box, Heading } from '@primer/react';

// Intern Imports
import PhoneComponent from '@/components/phoneComponents/PhoneComponent';

// Components Functions
export default function Home() {

  return (
    <Box sx={{
      display: 'flex',
      position: 'relative',
      justifyContent: 'center', // Flex Horizontal alignment
      alignItems: 'center', // Flex Vertical alignment
      minHeight: 'inherit',
      flexDirection: 'row',
      // border: "1px solid red"
    }}>
      <Box sx={{
        // border: "1px solid grey",
        padding: "15px", flexGrow: 1, minHeight: "100vh",
        minWidth: "50vh", display: "flex", justifyContent: "center",
        alignItems: "center"}}>
        <Heading as='h1' sx={{ padding: "15px" }}>Welcome to my website!</Heading>
      </Box>
      <Box sx={{
        // border: "1px solid blue",
        padding: "15px", flexGrow: 1, minHeight: "100vh",
        minWidth: "50vh", display: "flex", justifyContent: "center",
        alignItems: "center" }}>
        <PhoneComponent />
      </Box>
    </Box>
  )
}
