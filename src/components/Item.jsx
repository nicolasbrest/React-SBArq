import React from 'react';
import product from "../data/product";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function Item ( {product} ) {
    return (      
        <CardGroup>
            <Card border="info" bg="light" style={{ width: '10rem' }}>    
                <Card.Body>
                    <Card.Img variant='bottom' width="30%" src={product.image} alt={product.title}/>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Precio: $ {product.price} </Card.Text>
                    <Link to={`item/${product.id}`}  className="btn btn-primary">Más info</Link>
                    <hr/>
                    <ItemCount stock={product.stock} initial={0}/>
                    <div className="d-flex">
                            <p className="mt-3" style={{ color: 'grey'}}>Available stock: {product.stock}</p>
                    </div>
                </Card.Body>                 
            </Card>
        </CardGroup>
    );
};

export default Item;