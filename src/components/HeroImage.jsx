import React, { useState, useEffect } from "react"
import { useSpring, useTransition, animated, config } from "react-spring"

import screenshot1 from "../images/convo-screenshot1.png"
import screenshot2 from "../images/convo-screenshot2.png"
import { Box } from "./styles"

export default function HeroImage() {
  const [toggle, set] = useState(true)

  const aniProps = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0.9)",
    },
    config: {
      duration: 800,
    },
  })

  const transitions = useTransition(toggle, null, {
    from: {
      position: "absolute",
      width: "100%",
      top: "0",
      left: "0",
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => {
    const token = setInterval(() => set(!toggle), 5000)
    return () => clearInterval(token)
  })

  return (
    <animated.div style={aniProps}>
      <Box width="100%" pb="65%" position="relative" margin="auto">
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div style={props} key={key}>
              <Box as="img" src={screenshot1} width="100%" />
            </animated.div>
          ) : (
            <animated.div style={props} key={key}>
              <Box as="img" src={screenshot2} width="100%" />
            </animated.div>
          )
        )}
      </Box>
    </animated.div>
  )
}
