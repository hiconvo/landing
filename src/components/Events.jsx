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
            Planning events on Facebook doesn't work.
          </Heading>
          <Paragraph>
            Many have silenced Facebook notifications and do not check Facebook
            often. As a result, we often find out about events and parties after
            they have already happened.
          </Paragraph>
          <Paragraph>
            Convo solves this problem. We send minimal notifications by email
            &ndash; invitations and a daily digest only if you missed something
            important.
          </Paragraph>
        </Box>
        <Box width={["100%", "50%"]}>
          <Box as="img" src={event} width="100%" margin="auto" />
        </Box>
      </Box>
    </Section>
  )
}
