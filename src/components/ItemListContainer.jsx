import React, { useEffect, useState } from "react";
import productD from "../data/product";
import ItemList from "./ItemList";
import { getDocs, doc, getFirestore, collection} from 'firebase/firestore';
import { useParams } from "react-router-dom";


function getProducts(){

    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve (productD)
        }, 100 );
    });
}

function ItemListContainer ({ titulo }) {
    const { name } = useParams();
    const [loading, setLoading] = useState (false);
    const [productState, setProduct] = useState ([]);
    const promise = new Promise ((resolve ) => {
        setTimeout( () => {
            resolve (productD) }, 100 );
    });
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const itemsDocuments = getDocs(itemsCollection).then((snapshot) => { 
            const productD = snapshot.docs.map ((doc) => ({ id: doc.id, ...doc.productD() } ))
            console.log(productD);
            setLoading(false);
        });

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