import { useState } from 'react';
import React from 'react';
import {useParams,useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import {Form,Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import Rating from '../components/rating';
import './ProductScreen.css';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch} from 'react-redux';
import { useGetProductDetailQuery } from '../slices/productApiSlice';
import {addToCart} from '../slices/cartSlice';
const ProductScreen = () => {
    
    const { id: productId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty,setQty] = useState(1);


    const {data: product, isLoading, error} = useGetProductDetailQuery(productId);
    const addToCartHandler = ()=>{
        dispatch(addToCart({...product,qty}));
        navigate('/cart');
    }
  return (
    <>
    <Link className='btn btn-Light my-3 back'  to ='/'>
        Go back
    </Link>
    {isLoading? (
        <Loader />
    ): error? (
        <div>
            (<Message variant='danger'>{error?.data?.message ||error.error}</Message>)
        </div>
    ):(
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
                {product.countInStock>0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col>
                            <Form.Control as = 'select'
                            value={qty}
                            onChange={(e)=> setQty(Number(e.target.value))}>
                                {[...Array(product.countInStock).keys()].map((x)=>(<option key={x+1} value={x+1}>
                                    {x+1}
                                </option>))}
                            </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <ListGroup.Item>
                    <Row>
                        <Col>Status: </Col>
                        <Col>
                        <strong>{product.countInStock > 0 ? 'Available for Delivery':'Out of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className='btn btn-Dark my-3 addtocart' 
                    disabled={product.countInStock === 0} 
                    onClick={addToCartHandler}>Add to Cart</Button>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>
    )}
    </>
  );
};

export default ProductScreen;