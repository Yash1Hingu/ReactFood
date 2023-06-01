import Modal from '../UI/Modal'
import classes from './Cart.module.css';
const DUMMY_CARTITEMS = [
    {
        id: 'c1',
        name: 'panner ticka',
        amount: 2,
        price: 12.22
    }
]
const Cart = props => {
    const cartItems = DUMMY_CARTITEMS.map(item => <li>{item.name}</li>)
    return (
        <Modal>
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