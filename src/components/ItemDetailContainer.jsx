import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import product from "../data/product";
import { useParams } from "react-router-dom";

function ItemListContainer () {
    const [stateProduct, productSet] = useState ([]);

    const { id } = useParams;
    
    useEffect( () => {
        const getPro = new Promise ((resolve, reject)   => {
            setTimeout( () => {
                resolve (product);
            }, 2000 );
        });


        getPro.then(respuestaPromise => {
            const itemFound = respuestaPromise.filter ((element ) => element.id === id);
            productSet(itemFound[0]);
        });
    }, []);


    return(
        <>
            <ItemDetail product={stateProduct}/>
        </>
    )
}

export default ItemListContainer;