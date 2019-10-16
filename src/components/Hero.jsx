import React from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"
import { useSpring, animated } from "react-spring"
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
    overflow: hidden;
  }
`

const SpecialBackground = styled.div`
  background: linear-gradient(rgba(227, 250, 246, 1) 15%, #fafafa);
  width: 100%;
`

export default function Hero() {
  const aniProps = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: {
      opacity: 0,
      transform: "scale(1.2)",
    },
    config: {
      duration: 1200,
    },
  })

  return (
    <SpecialBackground>
      <Container>
        <Box pt={["17vh", "10rem"]} mb={4}>
          <Heading
            as="h1"
            fontSize={[4, 6]}
            fontWeight="bold"
            textAlign="center"
            whiteSpace={["unset", "nowrap"]}
          >
            Convo is{" "}
            <TextLoop
              children={[
                "messaging and events.",
                "an alternative to Facebook.",
                "slow paced social media.",
              ]}
            />
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
        <animated.div style={aniProps}>
          <Box width="100%" pb="62%" position="relative" margin="auto">
            <Box
              as="img"
              src={screenshot}
              width="100%"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>
        </animated.div>
        <Box mt={4}>
          <Paragraph textAlign="center" color="darkGray">
            <Icon name="arrow_downward" fontSize={6} />
          </Paragraph>
        </Box>
      </Container>
    </SpecialBackground>
  )
}
