import React from 'react'
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";

const App = () => {
  return (
    <>
    <Header />
      <main className="py-3">
        <Container>
          <h1>ecom</h1>
        </Container>
    </main>
    // hello
    </>
  )
}

export default App