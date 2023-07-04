import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
    const currYear = new Date().getFullYear()
  return (
   <footer>
    <Container>
        <Row>
            <Col className ='text-center py-3'>
                <p>Ecom &copy; {currYear}</p>
            </Col>
        </Row>
    </Container>
   </footer>
  )
}

export default Footer