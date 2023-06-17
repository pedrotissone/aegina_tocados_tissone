import React from 'react'
import ClickCounter from '../ClickCounter/ClickCounter'
import CartWidget from '../Header/CartWidget'
import "./itemDetail.css"
import { useContext, useState } from "react" //Importo Hooks
import { cartContext } from "../../context/cartContext"
import {Link} from "react-router-dom"
import MyButton from '../MyButton/MyButton'


function ItemDetail(product) {
  // const [isInCart, setIsInCart] = useState(false)
  // const { addToCart } = useContext(cartContext) //Uso destructuring para sacar la unica variable que quiero de el context
  
  // otra opcion
  // const addToCart = useContext(cartContext).addToCart


  // function handleAddToCart(count) {
  //   setIsInCart(count)
  //   addToCart(product, count)
  // }

  function sendMessage() {        
    const ownerPhoneNumber = '541166142146'; // Reemplaza con el número de teléfono del dueño del eCommerce
    const message = `¡Hola! Estoy interesado en el producto ${product.title}, que aparece aquí: ${window.location.href}`;
    const url = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};



  return (
    <div className='itemDetailBody'>
      
      {/* <div className='itemDetailCart'>
          <CartWidget />
        </div> */}

      <div className='itemDetailDivContainer'>
        <img className='itemDetailImg' src={product.img} alt={product.description} />
        <h2 className='itemDetailTitle'>{product.title}</h2>
        <p className='itemDetailDescription'>{product.description}</p>
        <h2 className='itemDetailPrice'>$ {product.price}</h2>

        <div className='itemDetailDiv'> 

          <div className='itemDetailCounter'>             
              {/* <ClickCounter sendMessage={sendMessage} stock={product.stock} /> */}
              <button className='itemDetailButtonMessage' onClick={sendMessage}>Quiero esto!</button>            
          </div>

        </div>

      </div>

    </div>


  )
}

export default ItemDetail;