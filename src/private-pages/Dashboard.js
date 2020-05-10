import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Spinner from "react-bootstrap/Spinner"
import CardGroup from "react-bootstrap/CardGroup"
import Jumbotron from "react-bootstrap/Jumbotron"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import ProgressBar from "react-bootstrap/ProgressBar"
import Sidebar from "../components/Sidebar"
import axios from "axios"

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [assemblies, setAssemblies] = useState([])
  const [checkedIn, setCheckedIn] = useState(60)
  const [currentlyAtPost, setCurrentlyAtPost] = useState(15)
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  useEffect(() => {
    setIsLoading(true)
    const token = JSON.parse(localStorage.user).jwt
    const id = JSON.parse(localStorage.user).user.id
    const url = `https://attendant-tracker-con.herokuapp.com/users/${id}`
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIsLoading(false)
        const { assemblies: usersAssemblies } = data
        setAssemblies(usersAssemblies)
      })
      .catch(error => error)
  }, [])

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="bg-dark d-none d-md-block p-0">
            <Sidebar />
          </Col>
          <Col md={10} className={"px-4 my-3"}>
            <Jumbotron className={"bg-light shadow py-4 my-3"}>
              <Container>
                <Row>
                  <Col md={8}>
                    <h1>{`Steven's Assembly`}</h1>
                    <div className="my-3">
                      <small>{`${checkedIn}% have checked in`}</small>
                      <ProgressBar
                        striped
                        className={"my-1"}
                        variant="success"
                        now={checkedIn}
                        label={`${checkedIn}%`}
                      />
                      <small>{`${currentlyAtPost}% are currently at a post`}</small>
                      <ProgressBar
                        striped
                        className={"my-1"}
                        variant="primary"
                        now={currentlyAtPost}
                        label={`${currentlyAtPost}%`}
                      />
                      <small>{`${75}% currently have a badge`}</small>
                      <ProgressBar
                        striped
                        className={"my-1"}
                        variant="warning"
                        now={75}
                        label={`${75}%`}
                      />
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <Accordion defaultActiveKey={windowWidth > 400 ? "0" : "1"}>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                            className="p-0"
                          >
                            Assembly QR Code
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <h2>Assembly Code</h2>
                            <img
                              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://onloaddevelopment.com`}
                              width="200"
                              alt={`Something`}
                              height="200"
                            />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </Row>
                <p>
                  <Button variant="primary">View Assembly Details</Button>
                </p>
              </Container>
            </Jumbotron>
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <CardGroup className="d-flex" style={{ overflowX: "auto" }}>
                {assemblies.map((assembly, idx) => (
                  <Card
                    bg={"info"}
                    className={"shadow mx-2"}
                    key={idx}
                    text={"light"}
                    style={{ minWidth: "15rem", maxWidth: "15rem" }}
                  >
                    <Card.Header>{assembly.name}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Some quick example text to build on the card title
                        and...
                      </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-info">
                        Starts: {assembly.starting_day}
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-info">
                        Ends: {assembly.ending_day}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                ))}
              </CardGroup>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Dashboard
