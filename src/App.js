import './App.css';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'
function App() {
  const [showCart, setshowCart] = useState(false);

  const showCartHandler = () => {
    setshowCart(true);
  }

  const closeCartHandler = () => {
    setshowCart(false);
  }

  return (
    <div className="App">
      {showCart && <Cart onClose={closeCartHandler}/>}
      <Header onShow = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
