import { useReducer } from 'react'; 
import CartContext from "./cart-context"

const defaultCartItem = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state,action) => {
    if(action.type === 'ADD') {
        const updateCartItems = state.items.concat(action.item);
        const updateAmount = state.items.totalAmount + action.items.price * action.items.amount;

        return {
            items: updateCartItems,
            totalAmount: updateAmount
        }
    }

    return defaultCartItem;
}

const CartContextProvider = props => {

    const [cartItems,dispathCartItem] = useReducer(cartReducer,defaultCartItem);

    const addCartContextHandler = (item) => {
        dispathCartItem({type: 'ADD',item: item})
    };
    const removeCartContext = (id) => {
        dispathCartItem({type: 'REMOVE' , id: id})
    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addCartContextHandler,
        removeItem: removeCartContext
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;