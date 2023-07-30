import React from 'react';
import { useState,useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {Table,Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/orderApiSlice';
import { Form,Row,Col} from 'react-bootstrap';



const OrderListScreen = () => {
  const {data: orders, isLoading,error} = useGetOrdersQuery();
  const [pending,setPending]= useState([]);
  const [delivered,setDelivered] = useState([]);
  useEffect(() => {
    if (!isLoading && !error && orders) {
      const pendingOrders = orders.filter((order) => !order.isDelivered);
      const deliveredOrders = orders.filter((order)=> order.isDelivered);
      pendingOrders.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      setDelivered(deliveredOrders);
      setPending(pendingOrders);
    }
  }, [isLoading, error, orders]);
  const [status,setStatus] = useState(0);
  console.log(delivered);
  console.log(pending);
  const handleStatusChange = (e) => {
    setStatus(Number(e.target.value));
  };
  let show = [];
  if (status === 1) {
    show = delivered;
  } else if (status === 2) {
    show = pending;
  } else {
    show = orders;
  }
  return (
    <>
      <Row>
      <Col>
      <h1>Orders</h1>
      </Col>
      <Col xl={2} l = {2} md = {2}>
      <Form.Control as = 'select'
      className='back'
                            value={status}
                            onChange={handleStatusChange}>
                              <option key = 'delivered' value = {1}>
                                Delivered
                              </option>
                              <option key = 'pending' value = {2}>
                                Pending
                              </option>
                              <option key = 'All' value = {0}>
                                All
                              </option>
                            </Form.Control>
      </Col>
      </Row>
      {isLoading? (<Loader />):error?<Message variant='danger'>
        error
      </Message>:(<Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
          </tr>
        </thead>
        <tbody>
            {show.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm back'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
      </Table>
      )
      };
    </>
  )
}

export default OrderListScreen