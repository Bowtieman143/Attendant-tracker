import React from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <h2>dfjdkss</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Dashboard
