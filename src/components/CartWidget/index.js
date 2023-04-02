import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './styles.css';
import { Link } from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';


function CartWidget() {

    const {totalProducts} = useCartContext();

    return (
        <Link to="/cart">
            <FaShoppingCart className='icon-cart'/>
            <span className='cart-noti'>{totalProducts() || ''}</span>
        </Link>
     
    );
  }

  export default CartWidget;
