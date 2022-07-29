import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';


const ItemDetail = ( {product} ) => {
    const [amount, setAmount] = useState (0);
    const {title, price, image, stock} = product;
    const navigate = useNavigate();
    const onAdd = (amount) => {
        setAmount(amount);
        navigate("/cart");
    };

    return (      
        <CardGroup>
            <Card className='card' bg="light" style={{ width: '20rem' }}>
                <Card.Img className='card-img-top' width="10%" src={image} alt={title}/>
                    <Card.Body className='d-flex flex-column justify-content-center'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Precio: $ {price} </Card.Text>  
                    </Card.Body>    
                <div>
                {(amount) === 0 && <ItemCount stock={stock} initial={0} onAdd={onAdd} />}
                <Link to="cart/"><button className='className= "variant="success" size="lg"'> Buy now! </button></Link>
                </div>
                
            </Card>
        </CardGroup>
    );
};

export default ItemDetail ;