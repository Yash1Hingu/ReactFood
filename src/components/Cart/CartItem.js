import REact from 'react';
import classes from './CartItem.module.css'

const CartItem = props => {
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
                    <button className={classes['add-btn']}>{'+'}</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;