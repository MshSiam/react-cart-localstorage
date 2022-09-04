import Header from "./components/Header"
import Main from "./components/Main"
import Basket from "./components/Basket"
import data from "./data"
import { useEffect, useState, useTransition } from "react"

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState([])

  // === onAdd function ====
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)

    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem("cartItems", JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems)
      localStorage.setItem("cartItems", JSON.stringify(newCartItems))
    }
  }

  // === onRemove function ====
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id)
      setCartItems(newCartItems)
      localStorage.setItem("cartItems", JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem("cartItems", JSON.stringify(newCartItems))
    }
  }

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    )
  }, [])

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  )
}

export default App
