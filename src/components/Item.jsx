import React from 'react';
import product from "../data/product";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

function Item ( {product} ) {
    return (      
        <CardGroup>
            <Card border="info" bg="light" style={{ width: '10rem' }}>
            <Card.Img variant='bottom' width="30%" src={product.image} alt={product.title}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Precio: $ {product.price} </Card.Text>
                    <ItemCount stock={product.stock} initial={1}/>
                </Card.Body>                 
            </Card>
        </CardGroup>
    );
};

export default Item ;