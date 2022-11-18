import React from 'react'
import ClickCounter from '../ClickCounter/ClickCounter'
import CartWidget from '../Header/CartWidget'
import "./itemDetail.css"
import { useContext } from "react" //Importo Hook
import { cartContext } from "../../context/cartContext"


function ItemDetail(product) { 

  const { addToCart } = useContext(cartContext) //Uso destructuring para sacar la unica variable que quiero de el context
                                            // otra opcion
  // const addToCart = useContext(cartContext).addToCart


  function handleAddToCart(count){
    alert(`Se agregaron ${count} productos al carrito`)
    addToCart(product, count)
    
  }

  return (
    <>
    <div className='itemDetailDivContainer'>      

      <div className='itemDetailDiv'>
      <div className='itemDetailCart'>
        <h2 className='itemDetailPrice'>$ {product.price}</h2>
        <CartWidget/>
      </div>        
        <h2 className='itemDetailTitle'>{product.title}</h2>
        <img className='itemDetailImg' src={product.img} alt={product.description}/>
        <p className='itemDetailDescription'>{product.description}</p>
        <div className='itemDetailCounter'>
          <ClickCounter handleAddToCart={handleAddToCart}  stock={product.stock}/>          
         
        </div>
    
      </div>

     </div>
    
    </>
    
    
  )
}

export default ItemDetail;