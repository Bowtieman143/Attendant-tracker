import React, { Fragment, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import axios from "axios"

const handleSubmit = (username, email, password, setLoading) => {
  setLoading(true)
  axios
    .post("https://attendant-tracker-con.herokuapp.com/auth/local/register", {
      username,
      email,
      password,
    })
    .then(response => {
      window.location.href = "/portal/profile"
    })
    .catch(error => {
      return error
    })
}

const SignupForm = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <Fragment>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Form
          onSubmit={e => {
            e.preventDefault()
            handleSubmit(username, email, password, setLoading)
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={e => {
                setUsername(e.target.value)
              }}
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => {
                setEmail(e.target.value)
              }}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => {
                setPassword(e.target.value)
              }}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Fragment>
  )
}

export default SignupForm
