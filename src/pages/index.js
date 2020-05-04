import React from "react"
import LoginForm from "../components/LoginForm"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <LoginForm />
    </Layout>
  )
}

export default IndexPage
