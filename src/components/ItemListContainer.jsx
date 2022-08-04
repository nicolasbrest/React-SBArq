import React, { useEffect, useState } from "react";
import productD from "../data/product";
import ItemList from "./ItemList";


function getProducts(){

    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (productD)
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
        <div className="d-flex gap-3 flex-row justify-center align-center text-center w-full vh-screen mb-12">
        <h1 className="sm:text-3x1 text-2x1 font-lighter title-font mb-4"><p>{ titulo }</p></h1>
            <ItemList product={productState}/>
        </div>
    )
}

export default ItemListContainer;