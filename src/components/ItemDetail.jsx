import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { CContext } from './Cart/CartContext';

const ItemDetail = ( { product } ) => {
    /*const navigate = useNavigate();*/
    /*navigate("/cart");*/
    const [amount, setAmount] = useState (0);
    const [count, setCount] = useState (0);
    const {title, price, image, stock} = product;
    const { addItem } = useContext(CContext);

    const onAdd = (cantidad) => {
        addItem(product, cantidad);
    };
    console.log(addItem);

    return (      
        <CardGroup style={{ width: '30rem' }} >
            <Card border="info" bg="light" >
                <Card.Img variant="top" src={image}  alt={title}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Precio: $ {price} </Card.Text>  
                    </Card.Body>    
                <Card.Footer>
                    <div className="d-flex">
                    {(amount) === 0 ? <ItemCount stock={stock} initial={0} onAdd={onAdd} count={count} setCount={setCount}/> : <h3> añadiste {amount} al carrito</h3>}
                    <Link to="/cart"><button className='btn btn-primary'> Ir al carrito </button></Link>
                    </div>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default ItemDetail ;