import React from "react"

import Section from "./Section"
import { Box, Heading, Paragraph } from "./styles"

export default function Demo() {
  let width = "735"
  let height = "450"

  const mq = window.matchMedia(`(max-width: 800px)`)
  if (mq.matches) {
    width = "400"
    height = "230"
  }

  return (
    <Section center={true}>
      <Box width="100%" maxWidth="80rem" margin="auto">
        <Heading
          as="h2"
          fontSize={4}
          fontWeight="semiBold"
          textAlign="center"
          mt={4}
          mb={4}
        >
          Watch a quick demo{" "}
          <span role="img" aria-label="tv">
            📺
          </span>
        </Heading>
        <Box
          as="iframe"
          title="demo"
          width={width}
          height={height}
          src="https://www.youtube.com/embed/ni8k3HFDiGI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          borderRadius="normal"
          overflow="hidden"
          border="lightGray"
          margin="auto"
        />
      </Box>
      <Box maxWidth="60rem" margin="auto" mt={4}>
        <Paragraph fontSize={3}>
          Watch a quick demonstration of how to create an event, invite people
          with a magic link, add contacts, and share items on your feed.
        </Paragraph>
      </Box>
    </Section>
  )
}
