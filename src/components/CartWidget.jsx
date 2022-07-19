const CartWidget = () => {
    const amount = 2;

    return ( 
        <>
            
            

            <button type="button" class="btn btn-primary position-relative">
            <img style={{ width: 30}} src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5
                <span class="visually-hidden">unread messages</span>
                </span>
            </button>

            
        </>

    );
}

export default CartWidget;