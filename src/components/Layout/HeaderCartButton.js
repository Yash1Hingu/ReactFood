import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';
const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [BtnIshighLighted,setBtnisHighLighted] = useState(false);
    const numberofCartList = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const { items } = cartCtx;
    useEffect(() => {

        if(items.length === 0) {
            return;
        } else {
            setBtnisHighLighted(true);
        }

        const timer = setTimeout(() => {
            setBtnisHighLighted(false)
        },300);

        return () => {
            clearInterval(timer);
        }
    },[items])

    const cartBtnclass = `${classes.button} ${BtnIshighLighted ? classes.bump : ''}`;

    return <button className={cartBtnclass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Add Cart
        </span>
        <span className={classes.badge}>
            {numberofCartList}
        </span>
    </button>
}

export default HeaderCartButton;