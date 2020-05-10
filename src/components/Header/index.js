import React, { Fragment, useState, useEffect } from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"

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
                <Fragment>
                  <NavDropdown title="Portal" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/portal/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/portal/dashboard">
                      Dashboard
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={handleShow}>Logout</Nav.Link>
                </Fragment>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {isLoggedIn() && <LogoutForm successRedirect="/" />}
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}

export default Header
