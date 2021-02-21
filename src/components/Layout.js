import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import { theme, Reset } from "./styles"

const Container = styled.div`
  margin: auto;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Reset />
        <Container>
          <main>{children}</main>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
