import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${isNavExpanded ? 'open' : ''}`}
      fixed="top"
      expanded={isNavExpanded}
    >
      <Container className="container-custom-nav">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-toggler-custom"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-Collapse-custom">
          <Nav className="mx-auto">
            <Link
              className="nav-link-custom"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              className="nav-link-custom"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              className="nav-link-custom"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              Skills
            </Link>
            <Link
              className="nav-link-custom"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </Nav>
          {/* Botón de cerrar */}
          <Button
            className="navbar-close-btn"
            onClick={handleNavClick}
            aria-label="Close"
          >
            &times;
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
