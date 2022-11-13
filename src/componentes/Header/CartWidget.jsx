import React from 'react'
import "./cartWidget.css"

function CartWidget(props) {
  return (
    <div>
        <div className="carrito">
        <img src="/img/carritoCompras.svg" alt="carrito de compras"/>
        <span>{props.counter}</span>
        </div>
    </div>
  )
}

export default CartWidget