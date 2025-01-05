import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaHome } from 'react-icons/fa';
import logo from '../../src/assests/img/logo.png';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm ">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            height="40"
          />
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/properties">Properties</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>

          {/* Contact icons */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="tel:+123456789">
              <FaPhoneAlt className="me-2" /> +123456789
            </Nav.Link>
            <Nav.Link href="mailto:info@example.com">
              <FaEnvelope className="me-2" /> info@example.com
            </Nav.Link>
            <Nav.Link href="/">
              <FaHome className="me-2" /> Visit Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
