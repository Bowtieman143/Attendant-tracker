import React from "react"
import Layout from "../components/Layout"
import LoginForm from "../components/LoginForm"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Login = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Login
