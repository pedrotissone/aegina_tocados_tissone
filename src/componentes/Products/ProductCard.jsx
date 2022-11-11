import React from 'react'
import "./productCard.css"
import {Link} from "react-router-dom"





function ProductCard( {title, img, description, price, id} ) {
 
  return (
    <div className='productCardDiv'>
            <div className='productCard'>              
              <h2 className='productCardTitle'>{title}</h2>
              <Link to=""><img className='productCardImg' src={img} alt={description}/></Link>
              <p className='productCardDescription'>{description}</p>
              <div className='productCardFooter'>
                <p className='productCardFooterPrice'>VALOR: ${price}</p>
                <button className="productCardFooterButton">Agregar al carrito</button>               
              </div>
                           
            </div>
    </div>
  )
}

export default ProductCard

//ESTA ES LA CARD QUE SE VA A MOSTRAR DE CADA PRODUCTO (SACO SU CONTENIDO DEL ARCHIVO DATA.JS)