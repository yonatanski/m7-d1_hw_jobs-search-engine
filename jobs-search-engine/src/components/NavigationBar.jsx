import React from "react"
import { Navbar, Nav, Container, Row } from "react-bootstrap"
import logo from "./logo.png"

function NavigationBar() {
  return (
    <Container>
      <Navbar bg="dark" className="text-white" variant="">
        <Navbar.Brand href="#home">
          <img src={logo} width="90px" alt="" /> Job Finder
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default NavigationBar
