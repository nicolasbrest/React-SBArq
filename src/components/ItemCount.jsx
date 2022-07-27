import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

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
    };

    const updateCountInput = (e) => {
        const {value} = e.target;
        if (value <= stock) {
            setCount(isNaN(value) ? 0 : parseInt(value));
        }
    };

    return ( 
        <Card className="flex flex-col mx-auto" style={{ width: '30%' }}>
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-1">
                <h1 className="sm:text-3x1 text-2x1 font-lighter title-font mb"><p>{props.itemproducto}</p></h1>
                
                <div>
                    <div>
                        <input
                            onChange={(e) => updateCountInput (e)}
                            className="border-primary"
                            placeholder=""
                            value={count}
                            type="number"
                        />
                    </div>

                    <div>
                        <Button variant="secondary" size="sm" onClick={handleSubstract}> - </Button>
                        <span>      {count}      </span>
                        <Button variant="secondary" size="sm" onClick={handleAdd}> + </Button>
                    </div>
                </div>
                <div>
                    <Button onClick={() => onAdd(count)} 
                    variant="success" 
                    size="lg"
                    disabled={count === "" || count === 0}

                    >
                    
                    Añadir al carrito
                    
                    </Button>{''}
                </div> 
            </div>           
        </div>
        </Card>
    )
}

export default ItemCount;