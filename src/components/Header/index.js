import { Link } from "gatsby"
import React, { Fragment, useState } from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"

import LoginForm from "../LoginForm"
import LogoutForm from "../LogoutForm"

import "./index.css"

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"))

  return (
    <Fragment>
      <Navbar className="mb-4" variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {isAuthenticated === true ? (
                <Nav.Link onClick={handleShow}>Logout</Nav.Link>
              ) : (
                <Nav.Link onClick={handleShow}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {isAuthenticated === true ? (
            <LogoutForm successRedirect="/" />
          ) : (
            <LoginForm desiredRoute="/portal" />
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default Header
