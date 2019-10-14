import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"

import screenshot from "../images/convo-screenshot.png"
import Section from "./Section"
import { Box, Heading, Button, Text, Paragraph } from "./styles"

const SpecialBackground = styled.div`
  background: linear-gradient(rgba(227, 250, 246, 1) 15%, #fafafa);
  width: 100%;
  height: 100vh;
`

export default function Hero() {
  return (
    <SpecialBackground>
      <Section>
        <Box pt="10vh" mb={4}>
          <Heading as="h1" fontSize={6} fontWeight="bold" textAlign="center">
            Convo is{" "}
            <TextLoop>
              <span>messaging and events.</span>
              <span>an alternative to Facebook.</span>
              <span>slow paced social media.</span>
              <span>not tracking you.</span>
            </TextLoop>
          </Heading>
          <Paragraph textAlign="center">
            Convo makes planning events with your real friends easy.
          </Paragraph>
        </Box>
        <Box mb={4}>
          <Box width="40%" margin="auto">
            <Button variant="primary">
              <Text fontWeight="semiBold" color="trueWhite">
                Sign up now
              </Text>
            </Button>
          </Box>
        </Box>
        <Box as="img" src={screenshot} width="100%" margin="auto" />
      </Section>
    </SpecialBackground>
  )
}
