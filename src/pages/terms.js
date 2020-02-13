import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

import Layout from "../components/Layout"
import { Heading, Paragraph } from "../components/styles"

const Container = styled.section`
  width: calc(100% - ${themeGet("space.5")} * 2);
  max-width: 80rem;
  margin: auto;
  padding-top: 16rem;
  padding-bottom: 8rem;

  ${themeGet("media.phone")} {
    width: calc(100% - ${themeGet("space.2")} * 2);
    max-width: calc(${themeGet("pageMaxWidth")} - ${themeGet("space.2")} * 2);
    overflow: hidden;
  }

  a {
    text-decoration: underline;
    font-weight: 500;
  }

  ol {
    list-style-type: lower-latin;
    list-style-position: initial;
    margin-left: 3.2rem;
  }

  li {
    display: list-item;
  }
`

const TermsOfService = () => (
  <Layout>
    <Container>
      <Heading as="h1" fontSize={4} fontWeight="semiBold">
        Convo Terms of Service
      </Heading>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        1. Terms
      </Heading>
      <Paragraph>
        By accessing the website at{" "}
        <a href="https://convo.events">https://convo.events</a> or{" "}
        <a href="https://app.convo.events">https://app.convo.events</a>, you are
        agreeing to be bound by these terms of service, all applicable laws and
        regulations, and agree that you are responsible for compliance with any
        applicable local laws. If you do not agree with any of these terms, you
        are prohibited from using or accessing this site. The materials
        contained in this website are protected by applicable copyright and
        trademark law.
      </Paragraph>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        2. Use License
      </Heading>
      <Paragraph>
        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Convo's website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Convo's website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ol>
          </li>
          <li>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Convo at any time. Upon
            terminating your viewing of these materials or upon the termination
            of this license, you must destroy any downloaded materials in your
            possession whether in electronic or printed format.
          </li>
        </ol>
      </Paragraph>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        3. Disclaimer
      </Heading>
      <Paragraph>
        <ol type="a">
          <li>
            The materials on Convo's website are provided on an 'as is' basis.
            Convo makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </li>
          <li>
            Further, Convo does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </li>
        </ol>
      </Paragraph>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        4. Limitations
      </Heading>
      <Paragraph>
        In no event shall Convo or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to use
        the materials on Convo's website, even if Convo or a Convo authorized
        representative has been notified orally or in writing of the possibility
        of such damage. Because some jurisdictions do not allow limitations on
        implied warranties, or limitations of liability for consequential or
        incidental damages, these limitations may not apply to you.
      </Paragraph>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        5. Accuracy of materials
      </Heading>
      <Paragraph>
        The materials appearing on Convo's website could include technical,
        typographical, or photographic errors. Convo does not warrant that any
        of the materials on its website are accurate, complete or current. Convo
        may make changes to the materials contained on its website at any time
        without notice. However Convo does not make any commitment to update the
        materials.
      </Paragraph>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        6. Links
      </Heading>
      <Paragraph>
        Convo has not reviewed all of the sites linked to its website and is not
        responsible for the contents of any such linked site. The inclusion of
        any link does not imply endorsement by Convo of the site. Use of any
        such linked website is at the user's own risk.
      </Paragraph>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        7. Modifications
      </Heading>
      <Paragraph>
        Convo may revise these terms of service for its website at any time
        without notice. By using this website you are agreeing to be bound by
        the then current version of these terms of service.
      </Paragraph>
      <Heading as="h2" fontSize={3} fontWeight="semiBold">
        8. Governing Law
      </Heading>
      <Paragraph>
        These terms and conditions are governed by and construed in accordance
        with the laws of Washington and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </Paragraph>
      <Paragraph>
        Generated by{" "}
        <a
          title="Terms of Service Template Generator"
          href="https://getterms.io/"
        >
          GetTerms.io
        </a>
      </Paragraph>
      <Paragraph>
        Convo is owned and operated by Alexander Richey in Seattle, Washington.
      </Paragraph>
    </Container>
  </Layout>
)

export default TermsOfService
