import React from 'react'
import {useState, useEffect} from "react"
// import products from '../../data/data.js' ESTO LO COMENTO XQ AHORA VOY A TRAER LOS PRODUCTOS DE LA "API" CON PROMESAS
import ProductCard from './ProductCard.jsx'
import "./products.css"
import {getItemsOrdered, getItemsByCategory} from '../../services/firestore'
import { useParams } from "react-router-dom"



function Products() {
 
  const [products, setProducts] = useState([])//array vacio para evitar errores
  
  const {idCategory} = useParams()   
  
  async function getItemsAsync(){
    if (!idCategory){
      let respuesta = await getItemsOrdered();
      setProducts(respuesta)
    } 
    else {
      let respuesta = await getItemsByCategory(idCategory);
      setProducts(respuesta)
    }
    
  }
  useEffect(
    ()=> {
      getItemsAsync();
    }, [idCategory]
  )
  // Antes filtraba por categoria con promesas, pero lo cambie por una async function con await
  // useEffect(
  //   ()=> {
  //     getItems(idCategory).then((respuestaDatos)=>{
  //       setProducts(respuestaDatos) //NO SE ROMPE TODO XQ TENGO EL SET TIMEOUT SINO TE HARÍA UN BUCLE INFINITO Y TE RENDERIZARIA TODO INFINITAS VECES XQ SIEMPRE ESTARIA CMABIANDO DE ESTADO
  //     })
  //   },[idCategory] //array vacio para indicar que lo hace solo cuando el componente se monta (1 vez)
  // )
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
            discount={products.discount}            
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