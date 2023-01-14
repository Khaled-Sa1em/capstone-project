import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'
export default function Header() {
  const { cartsLength } = React.useContext(Context)

  const iconClass = cartsLength > 0 ? 'fill' : 'line'
  return (
    <header className="header">
      <div className="container d-flex ">
        <div className="logo">
          <Link to="/">
            <h1>Images Store</h1>
          </Link>
        </div>
        <div className="cart-icon-container">
          <Link to="/carts">
            <i className={`ri-shopping-cart-${iconClass}`}></i>
          </Link>
        </div>
      </div>
    </header>
  )
}
