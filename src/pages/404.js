import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Box, Heading } from "../components/styles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box height="90vh" justifyContent="center" alignItems="center">
      <Heading fontSize={5} fontWeight="semiBold">
        Not found{" "}
        <span role="img" aria-label="sad face">
          🙁
        </span>
      </Heading>
    </Box>
  </Layout>
)

export default NotFoundPage
