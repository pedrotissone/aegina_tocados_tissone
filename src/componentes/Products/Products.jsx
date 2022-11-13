import React from 'react'
import {useState, useEffect} from "react"
// import products from '../../data/data.js' ESTO LO COMENTO XQ AHORA VOY A TRAER LOS PRODUCTOS DE LA "API" CON PROMESAS
import ProductCard from './ProductCard.jsx'
import "./products.css"
import getItems from '../../services/mockService.js'
import { useParams } from "react-router-dom"


function Products() {  

  // Necesito un estado, xq se renderiza el codigo vacio, y luego se cumple la promesa, necesito reRender!
 
  const [products, setProducts] = useState([])//array vacio para evitar errores

  const {idCategory} = useParams()
  
  //Llamo a mi promise getItem() (va a tardar 2 seg y el codigo sigue ejecutandose), uso el metodo then para resolver y le asigno a la variable products como valor la respuestaDatos que me da la promise
  //Uso efecto para que el pedido y reRender lo haga solo la primera vez! y no siempre.
  
  useEffect(
    ()=> {
      getItems(idCategory).then((respuestaDatos)=>{
        setProducts(respuestaDatos) //NO SE ROMPE TODO XQ TENGO EL SET TIMEOUT SINO TE HARÍA UN BUCLE INFINITO Y TE RENDERIZARIA TODO INFINITAS VECES XQ SIEMPRE ESTARIA CMABIANDO DE ESTADO
      })
    },[idCategory] //array vacio para indicar que lo hace solo cuando el componente se monta (1 vez)
  )
  return (    
      <>
        {products.map((products)=>{
          return (
          
            <ProductCard
            key={products.id}
            id={products.id}
            title={products.title}
            img={products.img}
            description={products.description}
            price={products.price}            
            /> 
          )
          })}        
      </>    
  )
}

export default Products;

//ESTE COMPONENTE HACE UN MAP Y RENDERIZA UN NUEVO ARRAY PARTIENDO DE DATA.JS Y RENDERIZA POR CADA OBJETO DE ESE ARCHIVO UNA PRODUCT CARD

     // <NavBarItem //DE ESTA FORMA VOS REUTILIZAS EL COMPONENTE PERO LE DAS LOS VALORES QUE SACAS DEL ARCHIVO DATA (PERO LA ESTRUCTURA DEL COMPONENTE YA ESTA DETERMINADA, POR ESO SOLO COLOCAS LAS PROPS Y SU VALOR!)
            //   key={products.id} //Le tenes que dar SI o SI la prop key para que React pueda diferenciar cada componente
            //   img={products.img}
            //   title={products.title}
                        
            
            // />