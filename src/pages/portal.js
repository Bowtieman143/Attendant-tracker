import React, { Fragment } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import axios from "axios"

// const getAllAttendants = () => {
//   axios
//     .get("http://localhost:1337/attendants", {
//       headers: {
//         Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))}`,
//       },
//     })
//     .then(res => {
//       console.log(res.data)
//       return res
//     })
//     .catch(err => {
//       return err
//     })
// }

const SecondPage = () => {
  return (
    <Layout>
      <Fragment>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
      </Fragment>
    </Layout>
  )
}

export default SecondPage
