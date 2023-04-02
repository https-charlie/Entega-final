import React from 'react';
import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom'
import ItemCart from '../ItemCart';

export default function Cart() {

  const {cart, totalPrice} = useCartContext();


  if(cart.length === 0){
    return(
      <div>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </div>
    )
  }
    return (
      <div>
        {cart.map(product => <ItemCart key={product.id} product={product} />)}
        <div className='d-flex flex-column container align-items-center'>
          <p>
            Total: {totalPrice()}
          </p>
          <button><Link to="/checkout">Emitir compra</Link></button>
        </div>
        
      </div>
    )
  

}
