import React from 'react'
import ClickCounter from '../ClickCounter/ClickCounter'
import CartWidget from '../Header/CartWidget'
import "./itemDetail.css"



function ItemDetail(product) {
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
          <ClickCounter/>          
          <button>Agregar al carrito</button>
        </div>
    
      </div>

      {/* <div className='itemDetailDivCart'>      
        <CartWidget/>
      </div> */}
    </div>
    
    </>
    
    
  )
}

export default ItemDetail;