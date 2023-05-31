import classes from './MealsItem.module.css'
import MealsForm from './MealsForm'
const MealsItem = props => {
    const price = `$${props.price}`
    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealsForm id={props.id}/>
        </div>
    </li>
}

export default MealsItem;