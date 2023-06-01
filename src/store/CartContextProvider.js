import CartContext from "./cart-context"
const CartContextProvider = props => {

    const addCartContextHandler = props => {};
    const removeCartContext = props => {};

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