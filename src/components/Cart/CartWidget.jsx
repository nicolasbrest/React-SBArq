import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const amount = 2;

    return ( 
        <>  
            <button type="button" className="btn btn-secondary position-relative">
            <Link to="/cart">
            <img style={{ width: 30}} src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" />
                <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">5
                <span className="visually-hidden">productos cargados</span>
                </span>
                </Link>
            </button>
            
        </>
    );
}

export default CartWidget;