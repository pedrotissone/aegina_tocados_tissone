import React from 'react'
import ClickCounter from '../ClickCounter/ClickCounter'
import CartWidget from '../Header/CartWidget'
import "./itemDetail.css"
import { useContext, useState } from "react" //Importo Hooks
import { cartContext } from "../../context/cartContext"
import {Link} from "react-router-dom"
import MyButton from '../MyButton/MyButton'


function ItemDetail(product) {
  const [isInCart, setIsInCart] = useState(false)
  const { addToCart } = useContext(cartContext) //Uso destructuring para sacar la unica variable que quiero de el context
  
  // otra opcion
  // const addToCart = useContext(cartContext).addToCart


  function handleAddToCart(count) {
    setIsInCart(count)
    addToCart(product, count)

  }

  return (
    <>
      <div className='itemDetailDivContainer'>

        <div className='itemDetailDiv'>
          <div className='itemDetailCart'>
            <h2 className='itemDetailPrice'>$ {product.price}</h2>
            <CartWidget />
          </div>
          <h2 className='itemDetailTitle'>{product.title}</h2>
          <img className='itemDetailImg' src={product.img} alt={product.description} />
          <p className='itemDetailDescription'>{product.description}</p>
          <div className='itemDetailCounter'>
            {
              isInCart ?
              <Link className="itemDetailCarrito" to="/cart">
              <MyButton >Ir al carrito</MyButton>              
              </Link>
              :
              <ClickCounter handleAddToCart={handleAddToCart} stock={product.stock} />
            }
   

          </div>

        </div>

      </div>

    </>


  )
}

export default ItemDetail;