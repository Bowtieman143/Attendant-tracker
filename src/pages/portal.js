import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const SecondPage = () => {
  return (
    <Layout>
      {JSON.parse(localStorage.getItem("isAuthenticated")) === true && (
        <Fragment>
          <SEO title="Page two" />
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
        </Fragment>
      )}
      Thanks for comming
    </Layout>
  )
}

export default SecondPage
