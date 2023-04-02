import './styles.css';
import ItemList from './ItemList';
import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';






function ItemListContainer({greeting}) {
  const [data, setData] = useState([]);

  const {category} = useParams()

  useEffect(() =>{
    const querydb = getFirestore();
    const querCollection = collection(querydb, 'productos');
  


    if (category) {
      const queryFilter = query(querCollection, where('categoria', '==', category))
      getDocs(queryFilter)
      .then(res => setData(res.docs.map(product =>({id: product.id, ...product.data()}))))

    }else{
      getDocs(querCollection)
      .then(res => setData(res.docs.map(product =>({id: product.id, ...product.data()}))))
    }

  },[category])



  return (
    <div className="container  mt-5 ">
      <div className="row  justify-content-evenly">
        <ItemList data={data}/>
      </div>
    </div>
  );
}

export default ItemListContainer;