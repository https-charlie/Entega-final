import React, { useState } from "react";
import {useCartContext} from '../../context/CartContext';
import { addDoc,collection, getFirestore } from 'firebase/firestore';


const CheckoutForm = () => {

const {cart, totalPrice,totalProducts,clearCart} = useCartContext();
let fecha = new Date();
let date = fecha.toLocaleString();


const products = [];
cart.map((prod) => {
    return products.push({
        title: prod.title,
        price: prod.price,
        quantity: prod.quantity,
    });
});

  const initialOrder = {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    total: totalPrice(),
    productosTotal: totalProducts(),
};

const [buyer, setbuyer] = useState(initialOrder);
const [id, setId] = useState();

const sendOrder = (e) => {
    setbuyer({
        ...buyer,
        [e.target.name]: e.target.value,
    });
};


const guardarDatos = (e) => {
    e.preventDefault();
    const order = { buyer,  products, date };
    const db = getFirestore();
    const formCollection = collection(db, "checkOut");
    addDoc(formCollection, order).then((snapshot) => {
        setbuyer(initialOrder);
        setId(snapshot.id);
        clearCart();
    });
};
    return (
       <div className="container mt-5">
        <div className="row">
            {typeof id !== "undefined" ? (
                <div className="envio">
                    <h4>El formulario se ha enviado con el id:</h4>
                    <br />
                    <h3>
                    <strong>{id}</strong>
                    </h3>
                </div>
            ) : (
                ""
            )}
            <div className="col-lg-6">
                <div className="box-element">
                    <form className="form-check" onSubmit={guardarDatos}>
                    <h5>Datos del clientes</h5>
                <hr />
                        <div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Nombre.."
                                    onChange={sendOrder}
                                    value={buyer.name} 
                                    required/>
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email.."
                                    onChange={sendOrder}
                                    value={buyer.email}
                                    required/>
                            </div>
                        </div>
                        <div id="shipping-info">
                            <hr />
                            <h5>Informacion de envio :</h5>
                            <hr />
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="address"
                                    placeholder="Direccion.."
                                    onChange={sendOrder}
                                    value={buyer.address} 
                                    required/>
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="city"
                                    placeholder="Ciudad.."
                                    onChange={sendOrder}
                                    value={buyer.city}
                                    required/>
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="state"
                                    placeholder="Localidad.."
                                    onChange={sendOrder}
                                    value={buyer.state}
                                    required/>
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="zipcode"
                                    placeholder="Codigo postal.."
                                    onChange={sendOrder}
                                    value={buyer.zipcode}
                                    required/>
                            </div>
                        </div>

                        <hr />
                        <input
                            id="form-button"
                            className="btn btn-secondary me-md-2"
                            type="submit"
                            value="Pagar"
                        />
                    </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="box-element-2">
                    <h5>Resumen del pedido</h5>
                    <hr />
                    <div>
                        <div className="item-box">
                            {cart.map((prod) => (
                                <div key={prod.id} className="cart-row d-flex align-items-center" >
                                    <div style={{ flex: "1" }}>
                                        <img
                                            className="row-image"
                                            src={prod.pictureUrl}
                                            alt={prod.title}
                                        />
                                    </div>
                                    <div style={{ flex: "2" }}>
                                        <p>{prod.title}</p>
                                    </div>
                                    <div style={{ flex: "1" }}>
                                        <p>${prod.price}</p>
                                    </div>
                                    <div style={{ flex: "1" }}>
                                        <p>x {prod.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="quant-total">
                            <h5>Items: {totalProducts()}</h5>
                            <h5>Total: ${totalPrice()}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default CheckoutForm;
