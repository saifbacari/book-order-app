import { useContext } from "react";

import React from "react";
import BookItemForm from "./BookItemForm";
import CartContext from "../../store/cart-context";

import classes from './BookItem.module.css';

const BookItem = (props) => {
  const cartCtx =  useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

    return (
      <li className={classes.book}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
            <BookItemForm id={props.id} onAddToCart={addCartHandler}/>
        </div>
      </li>
    );
    
}

export default BookItem;