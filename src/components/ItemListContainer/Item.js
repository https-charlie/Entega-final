import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import React /*,{useContext}*/ from 'react';
//import { useCartContext } from '../../context/CartContext';

const onAdd = (quantity) =>{
  console.log(`Compraste ${quantity} unidades`)
}

function Item({info}) {

  //const nombre = useContext(useCartContext);

  //const urlDetail = "/detalle/{info.id}"

  return (

            <Card style={{ width: '18rem', height:'100%', padding:'0px' }} className="border border-dark border-3 rounded rounded-0 col-lg-4">
              <Card.Img variant="top" src={info.pictureUrl} style={{ borderRadius:'0px' }} />
                <Card.Body className=" mt-3 mb-3 ">
                  <Card.Title className="text-center mb-3 ">{info.title}</Card.Title>
                <Card.Text className='text-center'>
                    ${info.price}
                </Card.Text>
                  <div className="container">
                    <div className="d-flex  justify-content-center mt-3">
                      <Link to={`/detalle/${info.id}`}><Button  variant="primary">Ver más</Button></Link>
                    </div>
                  </div>
                </Card.Body>
            </Card>
  );
}

export default Item;