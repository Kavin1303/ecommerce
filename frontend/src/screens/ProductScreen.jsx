import React from 'react';
import {useParams} from "react-router-dom";
import products from "../products";
import {Link} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import Rating from '../components/rating';
import './ProductScreen.css';
const ProductScreen = () => {
    const { id: productId} = useParams();
    const product = products.find((p) => p._id === productId);
  return (
    <>
    <Link className='btn btn-Light my-3 back'  to ='/'>
        Go back
    </Link>
    <Row>
        <Col md = {4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    <b>Description:</b> {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md ={5} className='zoom'>
            <Image src ={product.image} alt={product.name} fluid className='zoom' />
        </Col>
        <Col md ={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                        <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status: </Col>
                        <Col>
                        <strong>{product.countInStock > 0 ? 'Available for Delivery':'Out of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className='btn btn-Dark my-3 addtocart' disabled={product.countInStock === 0}>Add to Cart</Button>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen;