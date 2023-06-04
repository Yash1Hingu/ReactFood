import { useReducer } from 'react';
import CartContext from "./cart-context"

const defaultCartItem = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateCartItems = state.items.concat(action.item);
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updateCartItems,
            totalAmount: updateAmount
        }
    }

    return defaultCartItem;
}

const CartContextProvider = props => {

    const [cartItems, dispathCartItem] = useReducer(cartReducer, defaultCartItem);

    const addCartContextHandler = (item) => {
        dispathCartItem({ type: 'ADD', item: item })
    };
    const removeCartContext = (id) => {
        dispathCartItem({ type: 'REMOVE', id: id })
    };

    // dynamic items and totalAmount
    const cartContext = {
        items: cartItems.items,
        totalAmount: cartItems.totalAmount,
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