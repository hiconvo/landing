import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"
import { themeGet } from "@styled-system/theme-get"

import screenshot from "../images/convo-screenshot.png"
import { Box, Heading, Button, Text, Paragraph, Icon } from "./styles"

const Container = styled.section`
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.5")} * 2);
  margin: auto;

  ${themeGet("media.phone")} {
    width: calc(100% - ${themeGet("space.2")} * 2);
    max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.2")} * 2);
  }
`

const SpecialBackground = styled.div`
  background: linear-gradient(rgba(227, 250, 246, 1) 15%, #fafafa);
  width: 100%;
`

export default function Hero() {
  return (
    <SpecialBackground>
      <Container>
        <Box pt={["16vh", "10vh"]} mb={4}>
          <Heading
            as="h1"
            fontSize={[4, 6]}
            fontWeight="bold"
            textAlign="center"
          >
            Convo is{" "}
            <TextLoop>
              <span>messaging and events.</span>
              <span>an alternative to Facebook.</span>
              <span>slow paced social media.</span>
            </TextLoop>
          </Heading>
          <Paragraph textAlign="center">
            Convo makes planning events with your real friends easy{" "}
            <span role="img" aria-label="woman">
              💁
            </span>{" "}
            <span role="img" aria-label="calendar">
              📅
            </span>{" "}
            <span role="img" aria-label="celebrate">
              🎊
            </span>
            .
          </Paragraph>
        </Box>
        <Box mb={4}>
          <Box width="40%" margin="auto">
            <Button as="a" variant="primary" href="https://app.hiconvo.com">
              <Text fontWeight="semiBold" color="trueWhite">
                Sign up now
              </Text>
            </Button>
          </Box>
        </Box>
        <Box as="img" src={screenshot} width="100%" margin="auto" />
        <Box mt={4}>
          <Paragraph textAlign="center" color="darkGray">
            <Icon name="arrow_downward" fontSize={6} />
          </Paragraph>
        </Box>
      </Container>
    </SpecialBackground>
  )
}
