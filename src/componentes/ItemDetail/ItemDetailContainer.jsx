
import React from 'react'
import {useState, useEffect} from "react"
// import products from '../../data/data.js' ESTO LO COMENTO XQ AHORA VOY A TRAER LOS PRODUCTOS DE LA "API" CON PROMESAS
import {getSingleProduct} from '../../services/mockService.js' //USO LLAVES PARA IMPORTAR ESA FUNCION XQ NO ES LA DEFAULT, (La default no necesita llaves)
import ItemDetail from './ItemDetail.jsx'
//Importo useParams (Hook de react-router-dom) para poder mostrar en las rutas dinamicas, los productos dinamicos tambien
import {useParams} from "react-router-dom" //Te va a devolver los parametros de las rutas que guarda react router dom




function ItemDetailContainer() {

  // const urlParams = useParams() O  sino usamos destructuring extrayendo la propiedad id (definida en Route) y transofrmandola en una variable
  const { id } = useParams()
  console.log(useParams())


  // Necesito un estado, xq se renderiza el codigo vacio, y luego se cumple la promesa, necesito reRender!
 
  const [product, setProduct] = useState([])//array vacio para evitar errores
  
  //Llamo a mi promise getItem() (va a tardar 2 seg y el codigo sigue ejecutandose), uso el metodo then para resolver y le asigno a la variable products como valor la respuestaDatos que me da la promise
  //Uso efecto para que el pedido y reRender lo haga solo la primera vez! y no siempre.
  
  useEffect(
    ()=> {
      getSingleProduct(id).then((respuestaDatos)=>{
        setProduct(respuestaDatos) //NO SE ROMPE TODO XQ TENGO EL SET TIMEOUT SINO TE HARÍA UN BUCLE INFINITO Y TE RENDERIZARIA TODO INFINITAS VECES XQ SIEMPRE ESTARIA CMABIANDO DE ESTADO
      })
    },[id] //array vacio para indicar que lo hace solo cuando el componente se monta (1 vez)
  )
  return (    
      <>

      <ItemDetail
      title={product.title}
      img={product.img}
      description={product.description}
      price={product.price}
      />
     
                  
      </>    
  )
}

export default ItemDetailContainer;