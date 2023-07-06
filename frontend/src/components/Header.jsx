import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart,FaUser,FaStore } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header>
        <Navbar  expand = "md" collapseOnSelect>
            <Container>
                <Navbar.Brand href = "/">
                  <FaStore /> ECOM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href ="/Cart"><FaShoppingCart  /> Cart</Nav.Link>
                            <Nav.Link href = "/login"><FaUser /> Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header