import React from 'react';
import { useState,useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {Table,Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/orderApiSlice';



const OrderListScreen = () => {
  const {data: orders, isLoading,error} = useGetOrdersQuery();
  const [pending,setPending]= useState([]);
  useEffect(() => {
    if (!isLoading && !error && orders) {
      const pendingOrders = orders.filter((order) => !order.isDelivered);
      setPending(pendingOrders);
    }
  }, [isLoading, error, orders]);
  const [delivered,setDelivered] = useState([]);
  useEffect(()=>{
    if(!isLoading && !error && orders){
      const deliveredOrders = orders.filter((order)=> order.isDelivered);
      setDelivered(deliveredOrders);
    }
  },[isLoading,error,orders]);
  console.log(delivered);
  console.log(pending);
  
  return (
    <>
      <h1>Orders</h1>
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
            {orders.map((order) => (
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