import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Home } from './components/Home'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'

function App() {

  const [cart,setCart] = useState([]);

  return <>
    <Home cart={cart}/>
    <Shop setCart={setCart}/>
    <Cart cart={cart} setCart={setCart}/>
  </>
}

export default App
