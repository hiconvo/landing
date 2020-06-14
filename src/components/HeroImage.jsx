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
      <Box as="img" src={screenshot2} width="100%" />
    </animated.div>
  )
}
