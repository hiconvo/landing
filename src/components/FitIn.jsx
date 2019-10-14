import React from "react"

import fitin from "../images/fitin.png"
import Section from "./Section"
import { Box, Heading, Paragraph } from "./styles"

export default function FitIn() {
  return (
    <Section center={true}>
      <Box width="100%" maxWidth="80rem" margin="auto">
        <Box as="img" src={fitin} width="100%" margin="auto" />
      </Box>
      <Box maxWidth="60rem" margin="auto">
        <Heading
          as="h2"
          fontSize={4}
          fontWeight="semiBold"
          textAlign="center"
          mt={4}
        >
          How Convo fits in
        </Heading>
        <Paragraph textAlign="left">
          Convo is intended to facilitate real-world connections. More like
          email and texting than other social media platforms, Convo is private
          and does not broadcast how popular you are (or aren't).
        </Paragraph>
      </Box>
    </Section>
  )
}
