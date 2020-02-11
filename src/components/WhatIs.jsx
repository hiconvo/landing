import React from "react"

import convo from "../images/convo.png"
import Section from "./Section"
import { Box, Heading, Paragraph, Text, Icon } from "./styles"

export default function WhatIs() {
  return (
    <Section center={true}>
      <Box flexDirection={["column", "row"]} alignItems="center">
        <Box width={["100%", "50%"]}>
          <Box as="img" src={convo} width="100%" margin="auto" />
        </Box>
        <Box width={["100%", "50%"]} pl={[0, 5]}>
          <Heading
            as="h2"
            fontSize={4}
            fontWeight="semiBold"
            textAlign={["center", "left"]}
          >
            Share photos, text, and links
          </Heading>
          <Paragraph fontSize={3}>
            Convo allows you to connect with people directly via{" "}
            <Text fontStyle="italic" fontSize={3}>
              Convos
            </Text>
            . A Convo is like a Facebook post except that it's only visible to
            the peope you choose.
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
      </Box>
    </Section>
  )
}
