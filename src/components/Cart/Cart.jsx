import React, {useContext} from "react";
import { CContext } from "./CartContext";
const Cart = () => {
    const { itemCarrito } = useContext (CContext);
    return <>itemCarrito.map (element) </>

};

export default Cart;