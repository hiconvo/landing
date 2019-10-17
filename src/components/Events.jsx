import React from "react"

import event from "../images/event.png"
import Section from "./Section"
import { Box, Heading, Paragraph } from "./styles"

export default function Events() {
  return (
    <Section center={true}>
      <Box flexDirection={["column", "row"]} alignItems="center">
        <Box width={["100%", "50%"]} pr={[0, 5]}>
          <Heading
            as="h2"
            fontSize={4}
            fontWeight="semiBold"
            textAlign={["center", "left"]}
          >
            Plan events with ease
          </Heading>
          <Paragraph>
            Convo makes it easy to plan events with real people. Invite your
            guests by name or email and they can RSVP in one click without
            having to create accounts of their own.
          </Paragraph>
        </Box>
        <Box width={["100%", "50%"]}>
          <Box as="img" src={event} width="100%" margin="auto" />
        </Box>
      </Box>
    </Section>
  )
}
