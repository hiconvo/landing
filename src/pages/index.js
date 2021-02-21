import React from "react"

import Layout from "../components/Layout"
import { Box, Heading, Paragraph } from "./../components/styles"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Convo" />
    <Box alignItems="center" justifyContent="center" minHeight="50vh">
      <Box maxWidth="60ch" margin={4}>
        <Heading fontSize={5} fontWeight="semiBold">
          Bye
        </Heading>
        <Paragraph>
          Convo has been shut down. If you had an account on Convo, your data
          has been deleted.
        </Paragraph>
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
