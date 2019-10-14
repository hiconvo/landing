/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { themeGet } from "@styled-system/theme-get"

import Logo from "./Logo"
import { theme, Reset, Box, Paragraph, Icon, Button } from "./styles"

const Container = styled.div`
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.5")} * 2);
  height: 100vh;
  padding: 0 ${themeGet("space.5")};
  margin: auto;

  ${themeGet("media.phone")} {
    width: calc(100% - ${themeGet("space.4")} * 2);
    padding: 0 ${themeGet("space.4")};
  }
`

const Header = styled.header`
  position: fixed;
  display: flex;
  z-index: 30;
  background: linear-gradient(
    rgba(227, 250, 246, 1) 15%,
    rgba(227, 250, 246, 0.8) 70%,
    #fafafa
  );
  width: 100%;

  ${themeGet("media.phone")} {
    width: calc(100% - ${themeGet("space.4")} * 2);
    padding: 0;
  }
`

const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${themeGet("headerHeight")};
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.5")} * 2);
  margin: auto;
`

const Footer = styled.footer``

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Reset />
        <Header>
          <InnerHeader>
            <Box flexDirection="row">
              <Logo width="4rem" />
            </Box>
            <Box>
              <Button
                as="a"
                href="https://app.hiconvo.com"
                variant="tertiary"
                flexDirection="row"
                alignItems="center"
              >
                Login
                <Icon name="arrow_forward" ml={1} />
              </Button>
            </Box>
          </InnerHeader>
        </Header>

        <Container>
          <main>{children}</main>

          <Footer>
            <Paragraph fontSize={0} color="mediumGray" textAlign="center">
              Made with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by{" "}
              <a href="https://twitter.com/AlexanderRichey">@AlexanderRichey</a>{" "}
              in Seattle, WA.
              <br />
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </Paragraph>
          </Footer>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
