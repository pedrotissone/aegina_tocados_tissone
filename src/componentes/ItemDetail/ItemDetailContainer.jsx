
import React from 'react'
import {useState, useEffect} from "react"
// import products from '../../data/data.js' ESTO LO COMENTO XQ AHORA VOY A TRAER LOS PRODUCTOS DE LA "API" CON PROMESAS

import {getSingleProduct} from '../../services/mockService.js' //USO LLAVES PARA IMPORTAR ESA FUNCION XQ NO ES LA DEFAULT, (La default no necesita llaves)
import ItemDetail from './ItemDetail.jsx'



function ItemDetailContainer() {

  // Necesito un estado, xq se renderiza el codigo vacio, y luego se cumple la promesa, necesito reRender!
 
  const [product, setProduct] = useState([])//array vacio para evitar errores
  
  //Llamo a mi promise getItem() (va a tardar 2 seg y el codigo sigue ejecutandose), uso el metodo then para resolver y le asigno a la variable products como valor la respuestaDatos que me da la promise
  //Uso efecto para que el pedido y reRender lo haga solo la primera vez! y no siempre.
  
  useEffect(
    ()=> {
      getSingleProduct().then((respuestaDatos)=>{
        setProduct(respuestaDatos) //NO SE ROMPE TODO XQ TENGO EL SET TIMEOUT SINO TE HARÍA UN BUCLE INFINITO Y TE RENDERIZARIA TODO INFINITAS VECES XQ SIEMPRE ESTARIA CMABIANDO DE ESTADO
      })
    },[] //array vacio para indicar que lo hace solo cuando el componente se monta (1 vez)
  )
  return (    
      <>
      <ItemDetail
      title={product.title}
      img={product.img}
      description={product.description}
      />                  
      </>    
  )
}

export default ItemDetailContainer;