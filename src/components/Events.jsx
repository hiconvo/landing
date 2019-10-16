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
            Planning events on Facebook doesn't work
          </Heading>
          <Paragraph>
            Too many of us have silenced Facebook notifications and do not
            routinely check Facebook. As a result, we often find out about
            events and parties after they have already happened.
          </Paragraph>
          <Paragraph>
            Convo is a new platform for planning events and connecting with real
            people that solves this problem. We send minimal notifications by
            email &ndash; invitations and a daily digest only if you missed
            something important.
          </Paragraph>
          <Paragraph>
            Your guests can RSVP in one click, without having to create accounts
            on Convo.
          </Paragraph>
        </Box>
        <Box width={["100%", "50%"]}>
          <Box as="img" src={event} width="100%" margin="auto" />
        </Box>
      </Box>
    </Section>
  )
}
