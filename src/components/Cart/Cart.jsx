import Button from "react-bootstrap/Button";
import React, {useContext} from "react";
import { CContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


const Cart = () => {
    const { itemCarrito, removeItemClear, clear, total } = useContext (CContext);
    const tot = total();
    
    return (
    <>
        { itemCarrito.length === 0 ? ( <> No tiene productos en el carrito <Button variant="dark"><Link to="/" variant="secondary" > Atras </Link> </Button> </> ) : (
        <>
            {itemCarrito.map ((element) => (
                <CartItem product={element.product} cantidad={element.cantidad} removeItemClear={removeItemClear}/>
            ))}
            <Button variant="danger" onClick= {() => clear ()}> Vaciar Carrito </Button>
            <h4>Monto Total: $ {tot} </h4>
        </>
        )}
    </>
    );
};

export default Cart;