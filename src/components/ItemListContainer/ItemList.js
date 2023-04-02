import Item from './Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return(
        data.map(closeth => <Item key={closeth.id} info={closeth}/>)
    )
}

export default ItemList;