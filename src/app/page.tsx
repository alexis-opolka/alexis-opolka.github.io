"use client"

// NextJS Imports
import { Box, Heading, Text } from '@primer/react';

// Intern Imports
import PhoneComponent from '@/components/phoneComponents/PhoneComponent';

// Components Functions
export default function Home() {

  return (
    <Box sx={{
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'inherit'
    }}>
      <Text>
        <Heading as='h1' sx={{padding: "15px"}}>Welcome to my website!</Heading>
      </Text>
    </Box>
  )
}
