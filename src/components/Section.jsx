import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

const Container = styled.section`
  height: 100vh;
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.5")} * 2);
  margin: auto;
`

export default function Section({ children }) {
  return <Container>{children}</Container>
}
