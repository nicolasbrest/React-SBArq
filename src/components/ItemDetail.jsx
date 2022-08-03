import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';


const ItemDetail = ( {product} ) => {
    const [amount, setAmount] = useState (0);
    const [count, setCount] = useState (0);
        console.log(product);
    const {title, price, image, stock} = product;
    const navigate = useNavigate();
    const onAdd = (cantidad) => {
        setAmount(cantidad);
        /*navigate("/cart");*/
    };
    console.log(amount);

    return (      
        <CardGroup>
            <Card className='card' bg="light" style={{ width: '20rem' }}>
                <Card.Img className='card-img-top' width="10%" src={image} alt={title}/>
                    <Card.Body className='d-flex flex-column justify-content-center'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Precio: $ {price} </Card.Text>  
                    </Card.Body>    
                <div>
                {(amount) === 0 ? <ItemCount stock={stock} initial={0} onAdd={onAdd} count={count} setCount={setCount}/> : <h3> añadiste {amount} al carrito</h3>}
                <Link to="cart/"><button className='variant-success size-lg'> Buy now! </button></Link>
                </div>
                
            </Card>
        </CardGroup>
    );
};

export default ItemDetail ;