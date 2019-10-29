import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"

import Logo from "./Logo"
import { theme, Reset, Box, Paragraph, Icon, Button } from "./styles"

const Container = styled.div`
  min-height: 100vh;
  margin: auto;
`

const Header = styled.header`
  position: fixed;
  display: flex;
  z-index: 30;
  background: linear-gradient(
    rgba(227, 250, 246, 1) 15%,
    rgba(227, 250, 246, 0.8) 70%,
    rgba(227, 250, 246, 0)
  );
  width: 100%;
`

const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  height: ${themeGet("headerHeight")};
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.5")} * 2);
  margin: auto;

  ${themeGet("media.phone")} {
    width: calc(100% - ${themeGet("space.3")} * 2);
    max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.3")} * 2);
  }
`

const Footer = styled.footer`
  margin-bottom: 4rem;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Reset />
        <Header>
          <InnerHeader>
            <Link to="/">
              <Box flexDirection="row">
                <Logo width="4rem" />
              </Box>
            </Link>
            <Box as="nav" flexDirection="row">
              <Button
                as="a"
                href="https://blog.hiconvo.com"
                variant="tertiary"
                flexDirection="row"
                alignItems="center"
                mr={1}
                mb={0}
              >
                Blog
              </Button>

              <Button
                as="a"
                href="https://app.hiconvo.com"
                variant="tertiary"
                flexDirection="row"
                alignItems="center"
                mr={1}
                mb={0}
              >
                Login
              </Button>

              <Button
                as="a"
                href="https://app.hiconvo.com"
                variant="tertiary"
                flexDirection="row"
                alignItems="center"
                mb={0}
              >
                Sign up
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
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.{" "}
              <Link to="/privacy">Privacy policy</Link>.{" "}
              <Link to="/terms">Terms of service</Link>.
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
