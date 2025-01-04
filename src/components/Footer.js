import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>
              DreamHome is your one-stop solution for finding your dream property. Browse through a wide variety of houses, flats, and more.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Contact Us</h5>
            <p>Email: support@dreamhome.com</p>
            <p>Phone: +44 123 456 7890</p>
            <div>
              <a href="#" className="text-white me-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} DreamHome. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
