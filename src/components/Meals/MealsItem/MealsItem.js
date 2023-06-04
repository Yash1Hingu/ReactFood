import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealsItem.module.css'
import MealsForm from './MealsForm'
const MealsItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price}`

    const addCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealsForm id={props.id} onAddCartAmount={addCartHandler}/>
        </div>
    </li>
}

export default MealsItem;