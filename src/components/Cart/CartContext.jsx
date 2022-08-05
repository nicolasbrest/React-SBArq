import { createContext, useState } from "react";
export const CContext = createContext(); 

const CartContext = ( {children} ) => {
    const [itemCarrito, setItemCarrito] = useState([]);

    const addItem = ( product, cantidad ) => {
        const nuevoItem = isInCart (product);
        if (nuevoItem){
            
            cantidad = cantidad + nuevoItem.cantidad;

            setItemCarrito( itemCarrito.splice ( itemCarrito.findIndex ( (element) => element.product.id === product.id ) , 1)            
            );
        }
        setItemCarrito ([...itemCarrito, { product, cantidad }]);
    };

    const isInCart = (product) =>{
        return itemCarrito.find((element) => element.product === product);
    };

    const clear = () => {
        setItemCarrito([])
    };

    const removeItemClear = (itemId) => {
        setItemCarrito(itemCarrito.filter ((element) => element.product.id != itemId));
    };

    return <CContext.Provider value={{ itemCarrito, addItem, removeItemClear, clear }}>{children}</CContext.Provider>;
};


export default CartContext;