
import React from 'react';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckoutForm  from './components/CheckForm';
import CartProvider from './context/CartContext';


function App() {
  return (
    <section>
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:category' element={<ItemListContainer />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/detalle/:idUser' element={<ItemDetailContainer />} />
            <Route exact path="/checkout" element={<CheckoutForm />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
    </section>

  );
}

export default App;
