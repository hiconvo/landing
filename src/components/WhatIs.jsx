import React from "react"

import magiclink from "../images/magiclink.png"
import Section from "./Section"
import { Box, Heading, Paragraph, Text, Icon } from "./styles"

export default function WhatIs() {
  return (
    <Section center={true}>
      <Box flexDirection={["column-reverse", "row"]} alignItems="center">
        <Box width={["100%", "50%"]}>
          <Box as="img" src={magiclink} width="100%" margin="auto" />
        </Box>
        <Box width={["100%", "50%"]} pl={[0, 5]}>
          <Heading
            as="h2"
            fontSize={4}
            fontWeight="semiBold"
            textAlign={["center", "left"]}
          >
            Message your invitations with magic links <span role="img" aria-label="wizard">🧙🏾‍♀️</span>
          </Heading>
          <Paragraph fontSize={3}>
            If you don't know your guest's email address, you can message them a link instead. Anyone who clicks on a magic link is given access to your event and can RSVP. You can also deactivate magic links if they get into the wrong hands. <span role="img" aria-label="sparkles">✨</span>
          </Paragraph>
          <Paragraph fontSize={3}>
            <Text
              as="a"
              fontSize={3}
              fontWeight="semiBold"
              href="https://blog.convo.events/hello-world"
              color="primary900"
            >
              Learn more
              <Icon name="call_made" ml={1} />
            </Text>{" "}
          </Paragraph>
        </Box>
      </Box>
    </Section>
  )
}
