import React from "react"
import { useSpring, animated } from "react-spring"

import screenshot2 from "../images/convo-screenshot2.png"
import { Box } from "./styles"

export default function HeroImage() {
  const aniProps = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0.9)",
    },
    config: {
      duration: 800,
    },
  })

  return (
    <animated.div style={aniProps}>
      <Box width="100%" pb="65%" position="relative" margin="auto">
        <Box
          as="img"
          src={screenshot2}
          width="100%"
          position="absolute"
          top="0"
          left="0"
        />
      </Box>
    </animated.div>
  )
}
