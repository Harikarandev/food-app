import {useContext, useEffect, useState} from "react";
import classes from './CartButton.module.css';
// import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-context";

const CartButton = (props) =>{

  const [buttonhighlighted, setbuttonhighlighted] = useState(false);

  const cartCtx =  useContext(CartContext);

  const {items} = cartCtx;
  const numberofCartItems = items.reduce((curNo,items) =>{
    console.log(cartCtx.items);
    return curNo + items.amount;
  }, 0);
  console.log('numberofitems',numberofCartItems);


  const btnclasses = `${classes.button} ${buttonhighlighted ? classes.bump : ''}`;

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setbuttonhighlighted(true);

    const timer = setTimeout(()=>{
      setbuttonhighlighted(false);
    },300);

    return () =>{
      clearTimeout(timer);
    }
  },[items]);

    return (
        <button className={btnclasses} onClick={props.onClick}>
            <span className={classes.icon}>
                {/* <CartIcon/> */}
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberofCartItems}</span>
        </button>
    );

}

export default CartButton;