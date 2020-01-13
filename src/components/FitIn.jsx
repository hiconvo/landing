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
          Join a new kind of social network.
        </Heading>
        <Paragraph fontSize={3}>
          Convo is intended to support real-world connections. Unlike other
          social networks, Convo is private and does not broadcast how popular
          you are (or aren't).
        </Paragraph>
      </Box>
    </Section>
  )
}
