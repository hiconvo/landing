import React from "react"
import styled from "styled-components"

const Container = styled.section`
  height: 100vh;
`

export default function Section({ children }) {
  return <Container>{children}</Container>
}
