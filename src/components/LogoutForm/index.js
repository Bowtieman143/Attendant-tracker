import React, { Fragment, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import { navigate } from "@reach/router"
import { logout } from "../../services/auth"

const LogoutForm = props => {
  const [loading, setLoading] = useState(false)
  return (
    <Fragment>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Form
          onSubmit={event => {
            event.preventDefault()
            logout(() => {
              navigate("/")
            })
          }}
        >
          <h2>Hello</h2>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Fragment>
  )
}

export default LogoutForm
