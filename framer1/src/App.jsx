import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Order from './components/Order'
import Toppings from './components/Toppings'
import Base from './components/Base'

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] })

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter((t) => t !== topping)
      // newToppings = [...pizza.toppings, topping]
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza}/>} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza}/>} />
          <Route path="/order" element={<Order pizza={pizza} />} />
      </Routes>
    </>
  )
}

export default App
