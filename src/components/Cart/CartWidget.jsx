import React, {useContext} from "react";
import { CContext } from "./CartContext";
import { Link } from 'react-router-dom';
import shoppingBag from "../../assets/img/shoppingbag.png";

const CartWidget = (itemCarrito, cantidad) => {
    /*const { itemCarrito } = useContext (CContext);*/

    return ( 
        <>  
            {itemCarrito.length === 0 ? ( 
            <> </> 
            ) : (
                <>
                    <button type="button" className="btn position-relative">
                        <Link to="/cart">
                            <img style={{ width: 30}} src={shoppingBag} alt="carritonull" />
                            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">cantidad</span>
                        </Link>
                    </button>
                </>
            )}
        </>
    );
};

export default CartWidget;