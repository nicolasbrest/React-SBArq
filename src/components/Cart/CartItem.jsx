import React from "react";
import Button from "react-bootstrap/Button";
import { Card, CardGroup } from "react-bootstrap";

const CartItem = ({product, cantidad, removeItemClear}) => {
    return ( 
        <div className="flex flex-col">
            <CardGroup style={{ width: '20rem' }}>
            <Card border="info" bg="light" >    
            <Card.Img variant="top" src={product.image}  alt={product.title}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Precio: $ {product.price} </Card.Text>
                    
                </Card.Body>
                    <Card.Footer>
                        <div className="d-flex">
                            <p className="mt-3" style={{ color: 'grey'}}>Seleccionado: {cantidad}</p>
                        </div>
                        <Button variant="warning" onClick={() => removeItemClear (product.id)} > Eliminar </Button>{' '}
                    </Card.Footer>                 
            </Card>
        </CardGroup>
            {/*{product.title} - {product.price} - {cantidad}
            <Button variant="danger" onClick={() => removeItemClear (product.id)} > Eliminar </Button>{' '}*/}
        </div>

    );
};

export default CartItem;