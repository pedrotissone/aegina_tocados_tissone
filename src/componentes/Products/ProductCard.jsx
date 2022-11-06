import React from 'react'
import "./productCard.css"



function ProductCard(products) {
  return (
    <div className='productCardDiv'>
            <div className='productCard'>              
              <h2 className='productCardTitle'>{products.title}</h2>
              <img className='productCardImg' src={products.img} alt={products.description}/>
              <p className='productCardDescription'>{products.description}</p>
              <div className='productCardFooter'>
                <p className='productCardFooterPrice'>VALOR: ${products.price}</p>
                <button className="productCardFooterButton">Agregar al carrito</button>             
              </div>
                           
            </div>
    </div>
  )
}

export default ProductCard

//ESTA ES LA CARD QUE SE VA A MOSTRAR DE CADA PRODUCTO (SACO SU CONTENIDO DEL ARCHIVO DATA.JS)