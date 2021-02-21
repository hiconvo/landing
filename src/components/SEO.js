/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"

function SEO({ title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title || "Convo"}
    />
  )
}

export default SEO
