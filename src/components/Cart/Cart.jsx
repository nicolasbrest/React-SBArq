import Button from "react-bootstrap/Button";
import React, {useContext} from "react";
import { CContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { itemCarrito, removeItemClear, clear } = useContext (CContext);
    return (
    <>
        {itemCarrito.map ((element) => (
            <CartItem product={element.product} cantidad={element.cantidad} removeItemClear={removeItemClear}/>
        ))}
        <Button variant="danger" onClick= {() => clear ()}> Vaciar Carrito </Button>
    </>
    );
};

export default Cart;