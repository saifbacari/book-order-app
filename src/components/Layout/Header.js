import { Fragment } from "react";
import React from "react";
import bibliotheque from "../../assets/bibliotheque.jpg"

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";



const Header = (props) => {
    return(
        <Fragment>
         <header className={classes.header}>
             <h1>Bookstar</h1>
             <HeaderCartButton onClick={props.onDisplayCart}/>
         </header>
         <div className={classes['main-image']}>
         <img src={bibliotheque} alt='a beautiful library' />
        </div> 
        </Fragment>
    )
}

export default Header;