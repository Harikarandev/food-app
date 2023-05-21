import React, {useRef, useState} from "react";

import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
const MealItemForm = (props) => {

    const [validAmount, setvalidAmount] = useState(true);
    const inputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = inputRef.current.value;
        console.log('enteredAmount',enteredAmount);
        const enteredAmountNum = +enteredAmount;
        console.log('enteredAmountNum',enteredAmountNum);

        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5 ){
            setvalidAmount(false);
            return ;
        }

        props.onAddToCart(enteredAmountNum);
    }
    return (
        <form className={classes.form} onSubmit = {submitHandler}>
            <Input
              ref = {inputRef} 
              label="Amount" 
              input={{
                id:'amount'+ props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} />
            <button>
               +&nbsp;&nbsp;Add
            </button>
            {!validAmount && <p>Enter Valid Amount.</p>}
        </form>
    );
};

export default MealItemForm;