import React, { useEffect, useState } from "react";
import productD from "../data/product";
import ItemList from "./ItemList";


function getProducts(){

    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (productD);
        }, 2000 );
    });
}

function ItemListContainer ({ titulo }) {

    const [productState, setProduct] = useState ([]);
    
    useEffect( () => {
        getProducts().then(respuestaPromise =>{
            setProduct(respuestaPromise);
        });
    }, []);



    return(
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3x1 text-2x1 font-lighter title-font mb-4"><p>{ titulo }</p></h1>
                <ItemList product={productState}/>
            </div>
        </div>
    )
}

export default ItemListContainer;