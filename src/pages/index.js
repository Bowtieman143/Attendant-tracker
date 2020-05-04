import React from "react"
import LoginForm from "../components/LoginForm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      This is the homepage
    </Layout>
  )
}

export default IndexPage
