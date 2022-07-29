import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function Item ( {product} ) {
    return (      
        <Container fluid>
                <CardGroup style={{ width: '30rem' }}>
                    <Card border="info" bg="light" >    
                    <Card.Img variant="top" src={product.image}  alt={product.title}/>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>Precio: $ {product.price} </Card.Text>
                            <Link to={`item/${product.id}`}  className="btn btn-primary">Más info</Link>
                            <hr/>
                            <ItemCount stock={product.stock} initial={0}/>
                        </Card.Body>
                            <Card.Footer>
                                <div className="d-flex">
                                    <p className="mt-3" style={{ color: 'grey'}}>Available stock: {product.stock}</p>
                                </div>
                            </Card.Footer>                 
                    </Card>
                </CardGroup>
        </Container>
    );
};

export default Item;