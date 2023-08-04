import { Box, PageLayout } from "@primer/react";
import PortfolioHeader from '../PortfolioHeader';

export default function PhoneComponent(){
  return(
    <PageLayout columnGap="condensed" sx={{
      border: "1px solid",
      borderColor: "cyan",
      minHeight: "80vh",
      minWidth: "100%"
    }}>
      <PageLayout.Header sx={{
        border: "1px solid",
        borderColor: "border.default"
      }}>
        <Box>
          Test Header
        </Box>
      </PageLayout.Header>
    </PageLayout>
  )
}
