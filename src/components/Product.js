import React from "react"

const Product = ({ product, onAdd, onRemove, item }) => {
  return (
    <div>
      <div className="card">
        <div>
          <img className="small" src={product.image} alt="" />
          <h3>{product.name}</h3>
          <h2>${product.price}</h2>
          {item ? (
            <div>
              <button className="remove" onClick={() => onRemove(item)}>
                -
              </button>
              <span className="p-1">{item.qty}</span>
              <button className="add" onClick={() => onAdd(item)}>
                +
              </button>
            </div>
          ) : (
            <button onClick={() => onAdd(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
