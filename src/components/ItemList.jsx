import React from 'react';
import Item from './Item';

function ItemList( {product} ){
    console.log ("muestra itemList", product)
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