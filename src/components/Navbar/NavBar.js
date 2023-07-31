import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
import  logo from '../Navbar/img/gb.png'
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <Navbar expand="md" className="navbar-custom ">
            <Container className='container-custom-nav'>
                <picture className='imgContainer'>

                    <img src={logo} alt='img' className='img'/>

                </picture>
                <Navbar.Toggle aria-controls="basic-navbar-nav " className='nav-toggler-custom' />
                <Navbar.Collapse id="basic-navbar-nav" className="nav-Collapse-custom">
                    <Nav className="mx-auto">
                        <Link className="nav-link-custom" to="/" spy={true} smooth={true} offset={50} duration={500}>
                            Home
                        </Link>
                        <Link className="nav-link-custom" to="about" spy={true} smooth={true} offset={50} duration={500}>
                            About
                        </Link>
                        <Link className="nav-link-custom" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            Contact
                        </Link>
                        <Link className="nav-link-custom" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                            Skills
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;