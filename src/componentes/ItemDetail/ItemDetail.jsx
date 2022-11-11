import React from 'react'



function ItemDetail(product) {
  return (
    <>
    <h2>{product.title}</h2>
    <img src={product.img} alt={product.description}/>
    <p>{product.description}</p>
    
    </>
    
    
  )
}

export default ItemDetail