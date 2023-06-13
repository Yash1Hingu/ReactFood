import { useReducer } from 'react';
import CartContext from "./cart-context"

const defaultCartItem = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updateCartItems;
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;
        const existedItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existedCartItem = state.items[existedItemIndex];
        if(existedCartItem) {
            let updateCartItem = {
                ...existedCartItem,
                amount: action.item.amount + existedCartItem.amount
            }
            updateCartItems = [...state.items];
            updateCartItems[existedItemIndex] = updateCartItem;
        } else {
            updateCartItems = state.items.concat(action.item);
        }
        return {
            items: updateCartItems,
            totalAmount: updateAmount
        }
    }

    if(action.type === 'REMOVE') {
        let updateCartItems;
        const deleteItemIndex = state.items.findIndex((item) => item.id === action.id);
        const deleteItem = state.items[deleteItemIndex];
        const updateAmount = state.totalAmount - deleteItem.price;
        let updateCartItem; 

        if(deleteItem.amount === 1) {
            updateCartItems = state.items.filter(item => item.id !== action.id);
            return {
                items: updateCartItems,
                totalAmount: updateAmount
            }
        } else {
            updateCartItem = {
                ...deleteItem,
                amount : deleteItem.amount-1
            }
            updateCartItems = [...state.items];
            updateCartItems[deleteItemIndex] = updateCartItem;
        }
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