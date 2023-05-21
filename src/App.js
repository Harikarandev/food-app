import React,{useState}from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {

  const [cartShown, setcartShown] = useState(false);

  const showCart = () => {
    setcartShown(true);
  }
  const hideCart = () => {
    setcartShown(false);
  }
  return (
    <CartProvider>
      {cartShown && <Cart onhideCart = {hideCart}/>}
      <Header onshowCart={showCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
