import React, {useReducer} from "react";

import CartContext from "./Cart-context";

const defaultcartState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        const updatedItems = state.items.concat(action.item);
        return {
            item: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultcartState;
};

const CartProvider = props => {

    const [cartState, cartAction] = useReducer(cartReducer,defaultcartState);

    const addItemcart = item =>{
        cartAction({
            type: 'ADD',
            item: item
        });
    };
    
    const removeItemcart = id => {
        cartAction({
            type: 'Remove',
            id: id
        });
        
    };

    const cartContext = {
        items:  cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemcart,
    removeItem:removeItemcart
    };

    return ( 
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;