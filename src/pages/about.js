import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Creating a site, hosted on GitHub pages, to record my progress in the 100 Days of Code challenge.
    </p>
    <img src="https://source.unsplash.com/1600x900/?code" alt="diary" />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`