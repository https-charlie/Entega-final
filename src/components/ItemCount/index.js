import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';


export const ItemCount = ({initial, stock, onAdd})  => {

  const [count, setCount] = useState(parseInt(initial));

  const decrementar = () => {
      setCount(count - 1) 
  }

  const aumentar = () => {
      setCount(count+  1) 
  }

  useEffect(() => {

    setCount(parseInt(initial));

  }, [initial])



  return (
    <div className="counter row d-flex flex-row justify-content-between">
        <Button   variant="primary" disabled={count <= 1} onClick={decrementar}  className="col-lg-4 btn btn-primary rounded-0 bg-dark border-dark" id="menos" style={{ width: '50px' }}>-</Button>
           <span className="col-lg-4 text-center">{count}</span> 
        <Button  variant="primary" disabled={ count >= stock } onClick={aumentar} className="col-sm-4 btn btn-primary rounded-0 bg-dark border-dark" id="suma" style={{ width: '50px' }}>+</Button>
        <div className="p-0 d-flex  justify-content-center mt-3">
          <Button  disabled={ stock <= 0 } onClick={() => onAdd(count)} variant="primary" className="col-sm-12 btn btn-primary rounded-0 bg-dark border-dark" id="agregar">Agregar al Carrito</Button>
        </div>
    </div>

  );
}

export default ItemCount;
