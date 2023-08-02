"use client"

// NextJS Imports
import { t } from '@lingui/macro';
import PortfolioHeader from '@/components/PortfolioHeader';
import { Box, PageLayout } from '@primer/react';

// Components Functions
export default function Home() {

  return (
    <Box>
      {t`This is the main Content.`}
    </Box>
  )
}
