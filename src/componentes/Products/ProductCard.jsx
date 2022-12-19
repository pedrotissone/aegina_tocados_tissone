import React from 'react'
import "./productCard.css"
import {Link} from "react-router-dom"




//RENDERING CONDICIONAL DE LA PROPIEDAD DESCUENTO USANDO OPERADOR &&
function ProductCard( {title, img, description, price, id, discount} ) {
  
  const urlDetail = `/detail/${id}`;
 
  return (
    <div className='productCardDiv'>
            <div className='productCard'>              
              <img className='productCardImg' src={img} alt={description}/>
              <h2 className='productCardTitle'>{title}</h2>
              <p className='productCardDescription'>{description}</p>
              {/* {discount && <small>Descuento: {discount}</small>} */}
              <div className='productCardFooter'>
                <p className='productCardFooterPrice'>${price}</p>
               <Link to={urlDetail}> <button className="productCardFooterButton">Detalle</button></Link>               
              </div>              
                           
            </div>
    </div>
  )
}

export default ProductCard