import React, { useContext } from 'react'
import { cartContext } from "../../context/cartContext"
import { createOrder, exportArrayToFirestore } from '../../services/firestore';
import { useNavigate } from 'react-router-dom';
import MyButton from '../MyButton/MyButton';
import CartForm from './CartForm';
import "./cartView.css"

function CartView() {
    const {cart, removeItem, clear, priceInCart} = useContext(cartContext);
    const navigate = useNavigate()
    if (cart.length === 0) return <h2>Carrito vacío</h2>

    //Esto era para traer a firestore los productos automaticamente, solo lo use una vez para eso
    // function handleExport(){
    //   exportArrayToFirestore()
    // }

  async function handleCheckout(evt, data){

    const order = {
      buyer: data,
      items: cart,
      total: priceInCart(),
      date: new Date(),
    }
    const orderId = await createOrder(order)
    navigate(`/thankyou/${orderId}`)
  }

  return (
    <>
        {cart.map((item)=>(
            <div className='cartViewDivContainer' key={item.id}> 
                <h2>{item.title}</h2>
                <h2>${item.price}</h2>
                <h2>Cantidad: {item.count}</h2>
                <MyButton onClick={()=> removeItem(item.id)}>Eliminar</MyButton>
            </div>
        ))}
        <div className="vaciarCarrito">
          <MyButton onClick={clear}>Vaciar Carrito</MyButton>
          <CartForm onSubmit={handleCheckout}/>
          {/* <MyButton onClick={handleCheckout} >Finalizar Compra</MyButton> */}
          {/* <button onClick={handleExport}>borrenme pls</button> Esto era para traer a firestore los productos automaticamente */}
        </div>
    </>
  )
}

export default CartView