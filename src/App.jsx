import { useState } from 'react'
import './App.css'
import { Link,Outlet } from 'react-router';

function App() {

  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  return <>
    <header>
      <h1>SHOP.CO</h1>
      <nav>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart({cart.length})</Link>
        <Link to="/">Home</Link>
      </nav>
    </header>
    <Outlet context={{products,setProducts,cart,setCart}}/>
  </>
}

export default App