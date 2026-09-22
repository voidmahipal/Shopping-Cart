import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">SHOP.CO</Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart" className="cart-link">
            Cart <span>{cart.length}</span>
          </Link>
        </nav>
      </header>

      <Outlet context={{ products, setProducts, cart, setCart }} />
    </>
  )
}

export default App