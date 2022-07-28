import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const ItemDetail = ( {product} ) => {
    const [amount, setAmount] = useState (0);

    const navigate = useNavigate();
    const onAdd = (amount) => {
        setAmount (amount);
        navigate("/cart");
    };

    return (      
        <CardGroup>
            <Card className='card' bg="light" style={{ width: '20rem' }}>
            <Card.Img className='card-img-top' width="10%" src={product.image} alt={product.title}/>
                <Card.Body className='card-body d-flex flex-'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Precio: $ {product.price} </Card.Text>  
                </Card.Body>    
                
                {amount === 0 && <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />}
                
            </Card>
        </CardGroup>
    );
};

export default ItemDetail ;