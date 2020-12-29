import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Events from "../components/Events"
import WhatIs from "../components/WhatIs"
import Source from "../components/Source"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Convo" />
    <Hero />
    <Events />
    <WhatIs />
    <Source />
  </Layout>
)

export default IndexPage
