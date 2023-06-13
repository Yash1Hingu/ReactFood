import REact, { useContext } from 'react';
import classes from './CartItem.module.css'
import CartContext from '../../store/cart-context';

const CartItem = props => {
    const cartCtx = useContext(CartContext);

    const addCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price
        })
    }
    return (
        <div className={classes.cartitem}>
            <div className={classes['cartitem-name']}>
                {props.name}
                <div className={classes['cartitem-price']}>
                    {`$${props.price}`}
                </div>
            </div>
            <div className={classes['cartitem-amount']}>
                {`x${props.amount}`}
            </div>
            <div className={classes['cartitem-control']}>
                <div className={classes['cartitem-btn']}>
                    <button className={classes['remove-btn']}>{'-'}</button>
                    <button className={classes['add-btn']} onClick={addCartHandler}>{'+'}</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;