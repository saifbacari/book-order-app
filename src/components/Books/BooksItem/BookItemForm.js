import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./BookItemForm.module.css";

const BookItemForm = (props) => {
    
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    
    const submitHandler = event => {
        event.preventDefault();
    
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setAmountIsValid(false);
        return;
    }
    props.onAddToCart(enteredAmountNumber);

    }
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref = {amountInputRef}
          label="Quantité"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
          }}
        />
        <button>Ajouter +</button>
        {!amountIsValid && <p>Veuillez saisir une quantité entre 1 et 5</p>}
      </form>
    );
};

export default BookItemForm;