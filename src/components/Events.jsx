import React from "react"

import event from "../images/event.png"
import Section from "./Section"
import { Box, Heading, Paragraph, Text, Icon } from "./styles"

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
            Plan events
          </Heading>
          <Paragraph fontSize={3}>
            Convo makes it easy to plan events with real people. Invite your
            guests by name or email and they can RSVP in one click without
            having to create accounts of their own.
          </Paragraph>
          <Paragraph fontSize={3}>
            <Text
              as="a"
              fontSize={3}
              fontWeight="semiBold"
              href="https://blog.hiconvo.com/hello-world"
              color="primary900"
            >
              Learn more
              <Icon name="call_made" ml={1} />
            </Text>{" "}
          </Paragraph>
        </Box>
        <Box width={["100%", "50%"]}>
          <Box as="img" src={event} width="100%" margin="auto" />
        </Box>
      </Box>
    </Section>
  )
}
