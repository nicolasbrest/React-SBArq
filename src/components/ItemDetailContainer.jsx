import React, { useEffect, useState } from "react";
import productD from "../data/product";
import ItemDetail from "./ItemDetail";

function getPro(){

    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (productD);
        }, 2000 );
    });
}

function ItemListContainer ({ id }) {

    const [stateProduct, productSet] = useState ([]);
    
    useEffect( () => {
        getPro().then(respuestaPromise => {
            productSet(respuestaPromise[id]);
        });
    }, []);



    return(
        <section className="text-gray-600 body-font">
                <ItemDetail product={stateProduct}/>
        </section>
    )
}

export default ItemListContainer;