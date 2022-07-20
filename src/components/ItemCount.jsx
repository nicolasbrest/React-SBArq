import React, { useState } from "react";

function ItemCount (props) {
    const [count, setCount] = useState (props.initial);

    function handleAdd (){
        //setCount(count + 1);
        if (count < props.stock){
            setCount(prev => prev + 1)};
    }

    function handleSubstract (){
        //setCount(count - 1);
        if (count > 0) {setCount (prev => prev - 1)}
    }

    return ( 
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3x1 text-2x1 font-lighter title-font mb"><p>{props.itemproducto}</p></h1>
                
                <div>
                    <div>
                        <button onClick={handleSubstract}> - </button>
                        <span>      {count}      </span>
                        <button onClick={handleAdd}> + </button>
                    </div>
                </div>
                <div>
                    <button>Agregar al carrito</button>
                </div> 
            </div>           
        </div>
    )
}

export default ItemCount;