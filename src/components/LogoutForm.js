import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const handleSubmit = successRoute => {
  window.localStorage.setItem("isAuthenticated", false)
  window.localStorage.setItem("jwt", "")
  window.location.href = "/"
}

const LogoutForm = props => {
  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        handleSubmit(props.successRoute)
      }}
    >
      <h2>Hello</h2>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LogoutForm
