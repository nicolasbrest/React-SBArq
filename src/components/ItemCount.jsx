import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const ItemCount = ({ stock = 2, initial = 0, onAdd, itemproducto }) => {
    const [count, setCount] = useState (initial);
    
    function handleAdd (){
        //setCount(count + 1);
        if (count < stock){
            setCount(prev => prev + 1)};
    }

    function handleSubstract (){
        //setCount(count - 1);
        if (count > 0) {setCount (prev => prev - 1)}
    };

    return ( 
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-1">
                <h1 className="sm:text-3x1 text-2x1 font-lighter title-font mb"><p>{itemproducto}</p></h1>
                
                <div>
                    <div>
                        <Button variant="secondary" size="sm" onClick={handleSubstract}> - </Button>
                        <span>      {count}      </span>
                        <Button variant="secondary" size="sm" onClick={handleAdd}> + </Button>
                    </div>
                </div>
                <div>
                    <Button onClick={onAdd} 
                    variant="success" 
                    size="lg"
                    disabled={count === "" || count === 0}
                    >Añadir al carrito
                    </Button>

                </div> 
            </div>           
        </div>
    );
}

export default ItemCount;