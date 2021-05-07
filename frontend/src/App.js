import React from 'react';
import styled from 'styled-components';
import { CartProvider } from "react-use-cart";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  return (
    <CartProvider>
      <Navbar />
      <Container>
        <Home />
        <Cart />
      </Container>
    </CartProvider>

  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 78% 22%;
  color: #000;
  height: 100%;
  width: 100%;
`;


export default App;
