import React from 'react';
import {useCartContext} from '../../context/CartContext'

export default function ItemCart({ product }) {

    const { removeProduct } = useCartContext();

  return (
    <div className='container itemCart d-flex align-items-center justify-content-center'>
        <img src={product.pictureUrl} alt={product.title} />
        <div className='d-flex w-100 justify-content-around'>
            <p>Titulo: {product.title} </p>
            <p>Cantidad: {product.quantity} </p>
            <p>Precio u.: {product.price} </p>
            <p>Subtotal: {product.quantity * product.price} </p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
        
    </div>
  )
}
