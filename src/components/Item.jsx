import React from 'react';
import product from "../data/product";

function Item ( {product} ) {
    return ( 
        <div>
            <h4>{product.title}</h4>
            <picture>{product.image}</picture>
            <p>${product.price}</p>
            <br/>
            <hr/>
        </div>
    )
}

export default Item ;