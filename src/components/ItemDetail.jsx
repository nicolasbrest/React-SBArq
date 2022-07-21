import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ( {product} ) => {
    return (      
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
                <div>
                    <img
                        alt={product.title}
                        className="image object-contain bg-placeholder h-10 rounded w-small object-center mb-2"
                        src={product.image}
                    />
                </div>
                    <h4 className="h-20 tracking-widest text-grey-800 font-bold title-font">
                        {product.title}
                    </h4>
                    <span className="title-font font-medium text-1x1 text-gray-900">
                        <h2 className="mb-4">Precio: ${product.price}</h2>
                    </span>
                    <ItemCount stock={product.stock} initial={1}/>
            </div>
        </div>
    );
};

export default ItemDetail ;