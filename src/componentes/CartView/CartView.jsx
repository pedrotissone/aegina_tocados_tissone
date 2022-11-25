import React, { useContext } from 'react'
import { cartContext } from "../../context/cartContext"
import MyButton from '../MyButton/MyButton';

function CartView() {
    const {cart, removeItem, clear, priceInCart} = useContext(cartContext);
    if (cart.length === 0) return <h2>Carrito vacío</h2>
  return (
    <div>
        {cart.map((item)=>(
            <div key={item.id}> 
                <h2>{item.title}</h2>
                <h2>${item.price}</h2>
                <h2>Cantidad: {item.count}</h2>
                <MyButton onClick={()=> removeItem(item.id)}>Eliminar</MyButton>
            </div>
        ))}
        <MyButton>Vaciar Carrito</MyButton>
    </div>
  )
}

export default CartView