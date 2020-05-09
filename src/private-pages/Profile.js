import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Badge from "react-bootstrap/Badge"
import Media from "react-bootstrap/Media"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import axios from "axios"

// const handleSubmit = (id, email, username, setLoading) => {
//   setLoading(true)

//   const token = localStorage.getItem("jwt")
//   const data = { username, email }

//   axios
<<<<<<< HEAD
//     .put(`https://sad-panini-3db68b.netlify.app//users/${id}`, data, {
=======
//     .put(`http://localhost:1337/users/${id}`, data, {
>>>>>>> a721c168367d9179162b0f6c86eef643c37ad193
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       const oldUserInformation = JSON.parse(localStorage.getItem("user"))
//       const newUserInformation = { ...oldUserInformation, username, email }
//       localStorage.setItem("user", JSON.stringify(newUserInformation))
//       setLoading(false)
//     })
//     .catch(error => {
//       setLoading(false)
//       return error
//     })
// }

const Profile = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"))
  //   setUsername(user.username)
  //   setEmail(user.email)
  //   setId(user.id)
  // }, [])

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <Container>
                <Media>
                  <img
                    width={100}
                    height={100}
                    className="m-0 mr-3 rounded-circle"
                    src="data:image/png;base64,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"
                    alt="Generic placeholder"
                  />
                  <Media.Body className="my-auto">
                    <h2 className="my-auto">
                      Hey Steven <Badge variant="danger">Admin</Badge>
                    </h2>
                  </Media.Body>
                </Media>
              </Container>
            </Jumbotron>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  // handleSubmit(id, email, username, setLoading)
                }}
              >
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    placeholder="Password"
                    onChange={e => {
                      setUsername(e.target.value)
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Profile
