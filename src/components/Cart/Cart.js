import { useContext, useState } from 'react';
import Modal from '../UI/Modal'
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
const Cart = props => {
    const cartCtx = useContext(CartContext);
    const [cartIsEmpty,setcartIsEmpty] = useState(true);

    if(cartCtx.items.length > 0 && cartIsEmpty) {
        setcartIsEmpty(false);
    }
    const cartItems = cartCtx.items.map(item => <li>{item.name}</li>)
    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <span className={classes.total}>
                <span>Total Amount</span>
                <span>39.55</span>
            </span>
            <span className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {!cartIsEmpty && <button className={classes.button}>Order</button>}
            </span>
        </Modal>
    )
}

export default Cart;