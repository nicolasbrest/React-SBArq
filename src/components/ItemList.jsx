import React from 'react'
import Item from './Item'

function ItemList( {product} ){
    return (
    <>
        {product.map(thisproduct => {
            return (
            <Item product={thisproduct} key={thisproduct.id} />
                )
            })  
        }
    <>{ItemList}</>
    
    </>
    )
}


export default ItemList