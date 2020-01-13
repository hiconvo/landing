import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

import source from "../images/source.png"
import Section from "./Section"
import { Box, Heading, Paragraph, Text, Icon } from "./styles"

const Image = styled.img`
  width: 100%;
  margin: auto;
  border-radius: ${themeGet("radii.normal")};
  box-shadow: ${themeGet("shadows.spread")};
`

export default function Source() {
  return (
    <Section center={true}>
      <Box width="100%" maxWidth="80rem" margin="auto">
        <Image src={source} />
      </Box>
      <Box maxWidth="60rem" margin="auto">
        <Heading
          as="h2"
          fontSize={4}
          fontWeight="semiBold"
          textAlign="center"
          mt={4}
        >
          View the source code.
        </Heading>
        <Paragraph fontSize={3}>
          Convo is developed in the open. You can view our source code on{" "}
          <Text
            as="a"
            href="https://github.com/hiconvo"
            color="primary900"
            fontWeight="semiBold"
            fontSize={3}
          >
            GitHub
            <Icon name="call_made" ml={1} />
          </Text>{" "}
          and see exactly what data about you we have (and don't have) and how
          we use it.
        </Paragraph>
      </Box>
    </Section>
  )
}
