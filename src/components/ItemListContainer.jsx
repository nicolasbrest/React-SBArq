import React from "react";
import product from "../data/product";

function ItemListContainer ({ titulo }) {
    console.log (product);
    return(
        <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3x1 text-2x1 font-lighter title-font mb-4 text-red-500"><p>{ titulo }</p></h1>
            </div>
        </div>
    )
}

export default ItemListContainer;