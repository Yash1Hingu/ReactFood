import { useContext } from 'react';
import Modal from '../UI/Modal'
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
const Cart = props => {
    const cartCtx = useContext(CartContext);
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
                <button className={classes.button}>Order</button>
            </span>
        </Modal>
    )
}

export default Cart;