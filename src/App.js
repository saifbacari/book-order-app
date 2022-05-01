import { useState } from "react";
import Books from "./components/Books/Books";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";


function App() {
       const [cartIsVisible, setCartIsVisible] =useState(false);

       const showCartHandler = () =>{
        setCartIsVisible(true);
       }

       const hideCartHandler = () => {
         setCartIsVisible(false);
       }
  return (
    <CartProvider>
      {cartIsVisible &&<Cart onClose={hideCartHandler} />}
      <Header onDisplayCart={showCartHandler}/>
      <main>
      <Books />
      </main>
    </CartProvider>
  );
}

export default App;
