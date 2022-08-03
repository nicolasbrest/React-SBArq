import { createContext } from "react";
export const CContext = createContext(); 

const CartContext = ({children}) => {
    return <CContext.Provider>{children}</CContext.Provider>;
};


export default CartContext;