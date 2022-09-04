import React from "react"

const Header = (props) => {
  const { countCartItems } = props
  return (
    <div className="row block center">
      <div>
        <a href="#">
          <h2>Shopping Cart </h2>
        </a>
      </div>
      <div>
        <a href="#">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
      </div>
    </div>
  )
}

export default Header
