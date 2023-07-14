import React from 'react'
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
    </main>
    <Footer />
    <ToastContainer />
    </>
  )
};

export default App