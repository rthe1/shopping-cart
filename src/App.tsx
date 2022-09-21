import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';
import { Routing } from "./Routing";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
    <Container className="mb-4 vw-100">
      <Navbar />
      <Routing />
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
