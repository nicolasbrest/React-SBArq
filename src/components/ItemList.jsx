import React from 'react';
import Item from './Item';


function ItemList( {product} ){
    console.log ("render item list", product.items)
    return (
    <>
        {product.map(thisproduct => {
            return (
            <Item product={thisproduct} key={thisproduct.id} name={thisproduct.title} img={thisproduct.image} price={thisproduct.price}/>
                )
            })  
        };
    </>
    )
}


export default ItemList;