import React, { Fragment, useState, useEffect } from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"

import LoginForm from "../LoginForm"
import LogoutForm from "../LogoutForm"
import { isLoggedIn } from "../../services/auth"

import "./index.css"

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Fragment>
      <Navbar className="m-0" variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {isLoggedIn() ? (
                <Nav.Link onClick={handleShow}>Logout</Nav.Link>
              ) : (
                <Nav.Link href="/portal/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {isLoggedIn() ? (
            <LogoutForm successRedirect="/" />
          ) : (
            <LoginForm desiredRoute="/portal/profile" />
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default Header
