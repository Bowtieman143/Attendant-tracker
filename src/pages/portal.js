import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))

  return (
    <Layout>
      {isAuthenticated ? (
        <Fragment>
          <SEO title="Page two" />
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
        </Fragment>
      ) : (
        <h2>Please log in</h2>
      )}
      Thanks for comming
    </Layout>
  )
}

export default SecondPage
