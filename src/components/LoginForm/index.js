import React, { Fragment, useState, useEffect } from "react"
import { navigate } from "@reach/router"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
// import axios from "axios"
import { isLoggedIn, handleLogin } from "../../services/auth"

const handleSubmit = ({ username, password }) => {
  return handleLogin({ username, password })
}

const LoginForm = () => {
  if (isLoggedIn()) {
    navigate(`/portal/profile`)
  }

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Fragment>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Fragment>
          <h2>Login</h2>
          <Form
            onSubmit={e => {
              e.preventDefault()
              setIsLoading(true)
              handleSubmit({ username, password })
            }}
          >
            <Form.Group controlId="loginUsername">
              <Form.Label>Enter Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={e => {
                  setUsername(e.target.value)
                }}
                placeholder="Enter username"
              />
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                }}
                placeholder="Enter password"
              />
              <Form.Text type="text" className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Fragment>
      )}
    </Fragment>
  )
}

export default LoginForm
