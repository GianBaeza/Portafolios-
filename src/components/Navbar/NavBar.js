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
      className={`navbar-custom ${isNavExpanded ? "open" : ""}`}
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
          <Nav className="mx-auto nav">
            <Link
              className="nav-link-custom"
              to="inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              Inicio
            </Link>
            <Link
              className="nav-link-custom"
              to="conoceme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              Conóceme
            </Link>
            <Link
              className="nav-link-custom"
              to="proyecto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              Proyectos
            </Link>
            <Link
              className="nav-link-custom"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleNavClick}
            >
              Contacto
            </Link>
          </Nav>
          {/* Botón de cerrar */}
          <Button
            className="navbar-close-btn"
            onClick={handleNavClick}
            aria-label="Close"
            style={{ backgroundColor: "transparent" }}
          >
            &times;
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
