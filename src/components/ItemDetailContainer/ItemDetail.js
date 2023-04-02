import React, {useState} from 'react';
import Image from 'react-bootstrap/Image'
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';




const ItemDetail = ({data}) => {

        const [goToCart, setgoToCart] = useState(false)
        const {addProduct} = useCartContext();

        const onAdd = (quantity) =>{
            setgoToCart(true)
            addProduct(data, quantity)
        }


    return(
        <div>
             <h1>Detalle</h1>
             <div className="container" key={data.id}>
                <div className="row">
                    <div className="col-lg-6">
                        <Image src={data.pictureUrl} className="w-100"/>

                    </div>
                    <div className="col-lg-6">
                        <h2>{data.title}</h2>
                        <p className='text-justify'>{data.description}</p>
                        {
                            goToCart ? <Alert key="danger" variant="danger">
                            <Link to='/cart' className='text-center' style={{color: 'darkred', padding:'0px' }}>Terminar compra</Link>
                          </Alert> : <div className='d-flex justify-content-center'><ItemCount initial={0} stock={data.stock} onAdd={onAdd} /></div>

                        }
                    </div>
                </div>
             </div>
        </div>
    )
}
        
export default ItemDetail;