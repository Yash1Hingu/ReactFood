import { useRef , useState} from 'react';
import classes from './MealsForm.module.css'
import Input from '../../UI/Input'
const MealsForm = props => {
    const EnterAmountRef = useRef();
    const [inputIsvaild,setinputIsvaild] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        const enterAmount = +(EnterAmountRef.current.value);
        
        if (enterAmount < 1 | enterAmount > 5) {
            setinputIsvaild(false);
            return;
        }
        
        props.onAddCartAmount(+(EnterAmountRef.current.value));
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={EnterAmountRef}
                label="Amount"
                input={{
                    id: `amount_` + props.id,
                    type: "number",
                    defaultValue: '1'
                }}
            />
            {!inputIsvaild && <p>Enter Vaild Amount 1-5</p>}
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealsForm;