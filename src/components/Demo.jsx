import React, { useEffect, useState } from "react"

import Section from "./Section"
import { Box, Heading, Paragraph } from "./styles"

export default function Demo() {
  const [dims, setDims] = useState({ width: "735", height: "450" })

  useEffect(() => {
    const tablet = window.matchMedia(`(max-width: 800px)`)
    if (tablet.matches) {
      setDims({ width: "600", height: "350" })
    }

    const phone = window.matchMedia(`(max-width: 700px)`)
    if (phone.matches) {
      setDims({ width: "300", height: "180" })
    }
  }, [])

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
          width={dims.width}
          height={dims.height}
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
