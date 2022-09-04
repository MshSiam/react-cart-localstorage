import React from "react"
import Product from "./Product"

const Main = (props) => {
  const { products, onAdd, onRemove, cartItems } = props
  return (
    <div className="col-2 block">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            onAdd={onAdd}
            onRemove={onRemove}
            product={product}
            item={cartItems.find((x) => x.id === product.id)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
