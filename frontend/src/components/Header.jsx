import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart,FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg ="dark" variant ="dark" expand = "lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href = "/">ECOM</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' >
                    <Nav className="ms-auto">
                        <Nav.Link href ="/Cart"><FaShoppingCart />Cart</Nav.Link>
                        <Nav.Link href = "/login"><FaUser />Sign in</Nav.Link>
                    </Nav>
                </Navbar.Toggle>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header