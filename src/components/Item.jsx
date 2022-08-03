import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

function Item ( {product} ) {
    return (      
        <CardGroup style={{ width: '20rem' }}>
            <Card border="info" bg="light" >    
            <Card.Img variant="top" src={product.image}  alt={product.title}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Precio: $ {product.price} </Card.Text>
                    <Link to={`item/${product.id}`}  className="btn btn-primary">Más info</Link>
                </Card.Body>
                    <Card.Footer>
                        <div className="d-flex">
                            <p className="mt-3" style={{ color: 'grey'}}>Available stock: {product.stock}</p>
                        </div>
                    </Card.Footer>                 
            </Card>
        </CardGroup>
    );
};

export default Item;