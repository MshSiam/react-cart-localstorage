import React from "react"

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props
  const itemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const tax = itemPrice * 0.14
  const shipping = itemPrice > 5000 ? 0 : itemPrice === 0 ? 0 : 20
  const total = itemPrice + tax + shipping
  return (
    <aside className="col-2 block">
      <h1>Cart Items</h1>
      {cartItems.length === 0 ? (
        <h2>Your Cart is empty. Buy something</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <img width="50px" height="50px" src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p>
                ${item.qty} X {item.price * item.qty}{" "}
              </p>
            </div>
          ))}
        </>
      )}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${tax.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shipping.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button
              onClick={() => alert("Check Out is not Available Right Now")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  )
}

export default Basket
