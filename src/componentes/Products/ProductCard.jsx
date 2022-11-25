import React from 'react'
import "./productCard.css"
import {Link} from "react-router-dom"




//RENDERING CONDICIONAL DE LA PROPIEDAD DESCUENTO USANDO OPERADOR &&
function ProductCard( {title, img, description, price, id, discount} ) {
  
  const urlDetail = `/detail/${id}`;
 
  return (
    <div className='productCardDiv'>
            <div className='productCard'>              
              <h2 className='productCardTitle'>{title}</h2>
              <Link to={urlDetail}><img className='productCardImg' src={img} alt={description}/></Link>
              <p className='productCardDescription'>{description}</p>
              {discount && <small>Descuento: {discount}</small>}
              <div className='productCardFooter'>
                <p className='productCardFooterPrice'>VALOR: ${price}</p>
                <button className="productCardFooterButton">Ver más</button>               
              </div>              
                           
            </div>
    </div>
  )
}

export default ProductCard

//ESTA ES LA CARD QUE SE VA A MOSTRAR DE CADA PRODUCTO (SACO SU CONTENIDO DEL ARCHIVO DATA.JS)