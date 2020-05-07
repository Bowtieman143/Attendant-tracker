import React from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Badge from "react-bootstrap/Badge"
// import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
// import Spinner from "react-bootstrap/Spinner"
// import axios from "axios"

const Dashboard = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col className="p-0 bg-dark" md={2}>
            something
          </Col>
          <Col className="p-3" md={10}>
            <Jumbotron fluid>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
            <div className="d-flex">
              <Card
                className="mx-2"
                bg="light"
                key={1}
                style={{ width: "13rem" }}
              >
                <Card.Header>
                  Header{" "}
                  <Badge variant="primary" className="ml-2">
                    owner
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Card Title </Card.Title>
                  <Card.Text>Some quick example text to build.</Card.Text>
                </Card.Body>
                <Button variant="dark">Leave</Button>
              </Card>
              <Card
                className="mx-2"
                bg="light"
                key={2}
                style={{ width: "13rem" }}
              >
                <Card.Header>
                  Header{" "}
                  <Badge variant="success" className="ml-2">
                    keyman
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Card Title </Card.Title>
                  <Card.Text>Some quick example text to build.</Card.Text>
                </Card.Body>
                <Button variant="dark">Leave</Button>
              </Card>
              <Card
                className="mx-2"
                bg="light"
                key={2}
                style={{ width: "13rem" }}
              >
                <Card.Header>Header </Card.Header>
                <Card.Body>
                  <Card.Title>Card Title </Card.Title>
                  <Card.Text>Some quick example text to build.</Card.Text>
                </Card.Body>
                <Button variant="dark" className="w-100">
                  Leave
                </Button>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Dashboard
