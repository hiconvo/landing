import React from "react"

import convo from "../images/convo.png"
import Section from "./Section"
import { Box, Heading, Paragraph } from "./styles"

export default function WhatIs() {
  return (
    <Section center={true}>
      <Box flexDirection={["column", "row"]} alignItems="center">
        <Box width={["100%", "50%"]}>
          <Box as="img" src={convo} width="100%" margin="auto" />
        </Box>
        <Box width={["100%", "50%"]} pr={[0, 5]}>
          <Heading
            as="h2"
            fontSize={4}
            fontWeight="semiBold"
            textAlign={["center", "left"]}
          >
            Connect meaningfully
          </Heading>
          <Paragraph>
            A Convo is a thin abstraction layer over email that makes it easy to
            find people by their real names.
          </Paragraph>
          <Paragraph>
            When you start a Convo with someone, we create a custom email
            address that only you and those you've invited can use. Your
            personal contact info is always kept private.
          </Paragraph>
        </Box>
      </Box>
    </Section>
  )
}
