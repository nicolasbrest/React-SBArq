import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './Cart/CartWidget';
import imgLogo from '../assets/img/logosb.png';

const NavBar = () => {
    return (
        <Navbar bg="white" variant="light">
            <Container fluid>
                <img width="5%" src={imgLogo} alt="logo tienda" className='d-inline-block align-top'/>{''}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }} navbarScroll>
                
                <Nav.Link href="/">Home</Nav.Link>
                
                <Nav.Link href="/nosotras">Nosotras</Nav.Link>
            
                <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/productosinterior">Interior</NavDropdown.Item>
                    <NavDropdown.Item href="/productosexterior">Exterior</NavDropdown.Item>
            
            <NavDropdown.Divider />
            
                    <NavDropdown.Item href="/productos">Productos</NavDropdown.Item>
                </NavDropdown>
            
            <Nav.Link href="#" disabled>
                Próximamente
            </Nav.Link>
        </Nav>
        
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                
                />
            <Button variant="outline-success">Buscar</Button>
        </Form>
        </Navbar.Collapse>
        <CartWidget/>
    </Container>
    </Navbar>
);
}

export default NavBar;
