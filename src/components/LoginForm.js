import React, { Fragment } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from "axios"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: "", password: "" }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const data = {
      identifier: this.state.username,
      password: this.state.password,
    }

    axios
      .post("https://attendant-tracker-con.herokuapp.com/auth/local", data)
      .then(response => {
        window.localStorage.setItem("isAuthenticated", true)
        window.localStorage.setItem("jwt", response.data.jwt)
        window.location.href = "/portal"
      })
      .catch(error => {
        alert(error)
      })
    this.setState({ username: "", password: "" })
  }

  render() {
    return (
      <Fragment>
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="loginUsername">
            <Form.Label>Enter Username</Form.Label>
            <Form.Control
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
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
    )
  }
}

export default LoginForm
