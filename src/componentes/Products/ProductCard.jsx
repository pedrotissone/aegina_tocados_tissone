import React, { useState } from 'react'
import "./productCard.css"
import {Link} from "react-router-dom"
import {createDoc} from "../../services/firestore"


//RENDERING CONDICIONAL DE LA PROPIEDAD DESCUENTO USANDO OPERADOR &&

function ProductCard( {title, img, description, price, id, discount} ) {
  
  const urlDetail = `/detail/${id}`;

  function aplicarCreateDoc() {
    createDoc(cardTitle, cardDescription, cardPrice, cardImg, id)
    setGuardarEdicion("Refresca la página para ver reflejados los cambios")    
  }
  

  //ESTADOS PARA MODIFICAR EDICION

  const [admin, setAdmin] = useState(true) //Si se logeo jopi podes editar

  const [editing, setEditing] = useState(false)

  const [cardTitle, setCardTitle] = useState(title)

  const [cardDescription, setCardDescription] = useState(description)

  const [cardPrice, SetCardPrice] = useState(price)

  const [cardImg, setCardImg] = useState(img)

  const [guardarEdicion, setGuardarEdicion] = useState("Guardar edicion")


  //FUNCIONES PARA MODIFICAR EDICION

  const handleChangeDescription = (event) => {
    setCardDescription(event.target.value)    
  }

  const handleChangeTitle = (event) => {
    setCardTitle(event.target.value)    
  }

  const handleChangePrice = (event) => {
    SetCardPrice(event.target.value)    
  }

  const handleChangeImg = (event) => {
    setCardImg(event.target.value)    
  } 

  

  
  if (editing == false) {
  return (    
    <div className='productCardDiv'>
            <div className='productCard'>
              <picture className='productCardImgContainter'>
              <img className='productCardImg' src={img} alt={description}/>
              </picture>              
              
              <h2 className='productCardTitle'>{title}</h2>
              <p className='productCardDescription'>{description}</p>
              {/* {discount && <small>Descuento: {discount}</small>} */}
              <div className='productCardFooter'>
                <p className='productCardFooterPrice'>${price}</p>
               <Link to={urlDetail}> <button className="productCardFooterButton">Detalle</button></Link>
               {admin && <button onClick={() => setEditing(true)} className="productCardFooterButton">Editar</button>}            
              </div>              
                           
            </div>
    </div>
  )
  } else {
    return(      
      <div className='productCardDiv'>
            <div className='productCard'>              
              <input className='productCardImg' type='text' value={cardImg} onChange={handleChangeImg}/>
              <input className='editProductCardTitle' type='text' value={cardTitle} onChange={handleChangeTitle}/>
              <input className='editProductCardDescription'type='text' value={cardDescription} onChange={handleChangeDescription}/>
              {/* {discount && <small>Descuento: {discount}</small>} */}
              <div className='productCardFooter'>
                <input className='editProductCardFooterPrice'type='text' value={cardPrice} onChange={handleChangePrice}/>
               <Link to={urlDetail}> <button className="productCardFooterButton">Detalle</button></Link>
               <button onClick={() => aplicarCreateDoc() } className="productCardFooterButton">{guardarEdicion}</button>               
              </div>              
                           
            </div>
    </div>    
  )}
}

export default ProductCard