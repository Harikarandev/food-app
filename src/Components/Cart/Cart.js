import React, {useContext} from "react";

import classes from './Cart.module.css';

import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const removeItemHandler = id =>{
      cartCtx.removeItem(id);
    };

    const addItemHandler = item => {
      cartCtx.addItem({...item,amount:1});
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
           {/* {!hasItems && <p>Order Something!</p>} */}
          {cartCtx.items.map((item) => (
            // <li>{item.name}</li>
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={removeItemHandler.bind(null,item.id)}
              onAdd={addItemHandler.bind(null,item)}
            />
          ))}
        </ul>
      );

    return (
        <Modal onClose={props.onhideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onhideCart}>Close</button>
               {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;