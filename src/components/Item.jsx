import React from 'react';
import product from "../data/product";

function Item ( {product} ) {
    return (      
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
                <div>
                    <img
                        alt={product.title}
                        className="image object-contain bg-placeholder h-60 rounded w-full object-center mb-6"
                        src={product.image}
                    />
                </div>
                    <h4 className="h-20 tracking-widest text-grey-800 font-bold title-font">
                        {product.title}
                    </h4>
                    <span className="title-font font-medium text-1x1 text-gray-900">
                        <h2 className="mb-4">Precio: ${product.price}</h2>
                    </span>
                    <p className="leading-relaxed text-base text-grey-700">{product.stock}</p>
            </div>
            
        </div>
    );
};

export default Item ;