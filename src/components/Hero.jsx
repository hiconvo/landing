import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"
import { themeGet } from "@styled-system/theme-get"

import HeroImage from "./HeroImage"
import { Box, Heading, Button, Text, Paragraph, Icon } from "./styles"

const Container = styled.section`
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.5")} * 2);
  margin: auto;

  ${themeGet("media.phone")} {
    width: calc(100% - ${themeGet("space.2")} * 2);
    max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.2")} * 2);
    overflow: hidden;
  }
`

const SpecialBackground = styled.div`
  background: linear-gradient(rgba(227, 250, 246, 1) 15%, #fafafa);
  width: 100%;
`

const NoWrap = styled.span`
  white-space: nowrap;
`

export default function Hero() {
  return (
    <SpecialBackground>
      <Container>
        <Box pt={["12rem", "10rem"]} mb={3}>
          <Heading
            as="h1"
            fontSize={[5, 6]}
            fontWeight="bold"
            textAlign="center"
            whiteSpace={["unset", "nowrap"]}
            height={["3.4em", "1.6em", "1.6em"]}
          >
            Convo is{" "}
            <TextLoop
              className="textLoop"
              children={[
                "a new kind of social network.",
                "an alternative to Facebook.",
                "for your real friends.",
              ]}
            />
          </Heading>
          <Paragraph textAlign="center" fontSize={3}>
            Convo makes planning events and sharing with your{" "}
            <NoWrap>
              real friends easy{" "}
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
            </NoWrap>
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
        <HeroImage />
        <Box mt={4}>
          <Paragraph textAlign="center" color="darkGray">
            <Icon name="arrow_downward" fontSize={6} />
          </Paragraph>
        </Box>
      </Container>
    </SpecialBackground>
  )
}
