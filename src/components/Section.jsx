import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

const Container = styled.section`
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.5")} * 2);
  margin: 12rem auto;
  justify-content: ${props => (props.center ? "center" : "flex-start")};
`

export default function Section({ children, center }) {
  return <Container center={center}>{children}</Container>
}
