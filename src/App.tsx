import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';
import { Routing } from "./Routing";

function App() {
  return (
    <Container className="mb-4 vw-100">
      <Navbar />
      <Routing />
    </Container>
  );
}

export default App;
