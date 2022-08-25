import Button from "react-bootstrap/Button";
import React, {useContext} from "react";
import { CContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Cart = () => {
    const { itemCarrito, removeItemClear, clear, total } = useContext (CContext);
    const tot = total();
    
    const order = {
        buyer: {
            name: 'Nicolas',
            email: 'nbrest@gmail.com',
            phone: '123123',
            addres: 'siempre libre 123',
        },
        items: itemCarrito.map(product => ({id: product.id, title: product.title, price: product.price, cantidad: product.cantidad})),
        total: total(),
    }

    const handleClick = () =>  {
        const db = getFirestore();
        const ordersCollection = collection (db, 'orders');
        addDoc(ordersCollection, order)
        .then (({ id }) => console.log(id))
    }

    return (
    <>
        { itemCarrito.length === 0 ? ( <> No tiene productos en el carrito <Button variant="dark"><Link to="/" variant="secondary" > Atras </Link> </Button> </> ) : (
        <>
            {itemCarrito.map ((element) => (
                <CartItem product={element.product} cantidad={element.cantidad} removeItemClear={removeItemClear}/>
            ))}
            <Button variant="danger" onClick= {() => clear ()}> Vaciar Carrito </Button>
            <h4>Monto Total: $ {tot} </h4>
            <button onClick={handleClick}>Comprar ahora</button>
        </>
        )}
    
    
    
    </>
    );
};

export default Cart;