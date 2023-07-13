import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart,FaUser,FaStore } from 'react-icons/fa';
import logo from '../assets/logo.png';
import {LinkContainer} from 'react-router-bootstrap';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Badge } from 'react-bootstrap';


const Header = () => {
  const { cartItems } = useSelector((state)=>state.cart);
  return (
    <header>
        <Navbar  expand = "md" collapseOnSelect>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <FaStore /> ECOM</Navbar.Brand>
                  </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                          <LinkContainer to ="/Cart">
                            <Nav.Link><FaShoppingCart  /> Cart{
                              cartItems.length >0 && (
                                <Badge pill style={{ marginLeft:'5px'}}>
                                  {cartItems.reduce((a,c)=> a+c.qty,0)}
                                </Badge>
                              )
                            }</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to ="/login">
                            <Nav.Link><FaUser /> Sign in</Nav.Link>
                          </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header