
import React from 'react'
import {useState, useEffect} from "react"
// import products from '../../data/data.js' ESTO LO COMENTO XQ AHORA VOY A TRAER LOS PRODUCTOS DE LA "API" CON PROMESAS
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore"
import {getSingleProduct} from '../../services/firestore' //USO LLAVES PARA IMPORTAR ESA FUNCION XQ NO ES LA DEFAULT, (La default no necesita llaves)
import ItemDetail from './ItemDetail.jsx'
//Importo useParams (Hook de react-router-dom) para poder mostrar en las rutas dinamicas, los productos dinamicos tambien
import {useParams} from "react-router-dom" //Te va a devolver los parametros de las rutas que guarda react router dom
import Loader from '../Loader/Loader.jsx'
import SimpleSlider from '../SimpleSlider/SimpleSlider'
import "./itemDetailContainer.css"
import SinSlider from '../SimpleSlider/SinSlider';





function ItemDetailContainer() {

  const firebaseConfig = {
    apiKey: "AIzaSyAvMnEqG5EDp4qUNwfWbXJAnkZy8UVz1Nc",
    authDomain: "reactcoder-2d3f8.firebaseapp.com",
    projectId: "reactcoder-2d3f8",
    storageBucket: "reactcoder-2d3f8.appspot.com",
    messagingSenderId: "1061841607513",
    appId: "1:1061841607513:web:159805b5aaa63d48a44a48"
  };

 const app = initializeApp(firebaseConfig);
 const DB = getFirestore(app)

  // const urlParams = useParams() O  sino usamos destructuring extrayendo la propiedad id (definida en Route) y transofrmandola en una variable
  const { id } = useParams()
  
  // const loader = <h3 style={{textAlign: "center"}}>Cargando...</h3>; Esta era la variable para un renedering condicional, al useState le daba el valor de null!


  // Necesito un estado, xq se renderiza el codigo vacio, y luego se cumple la promesa, necesito reRender!
 
  const [product, setProduct] = useState([])//array vacio para evitar errores
  const [isLoading, setIsLoading] = useState(true)
  //Llamo a mi promise getItem() (va a tardar 2 seg y el codigo sigue ejecutandose), uso el metodo then para resolver y le asigno a la variable products como valor la respuestaDatos que me da la promise
  //Uso efecto para que el pedido y reRender lo haga solo la primera vez! y no siempre.

//Si no cargo las DOS imagenes en el documento de firebase no se va a mostrar el carrousel.
 const [img2, setImg2] = useState("")
 const [img3, setImg3] = useState("")

  async function getImagenesCarrousel(productId) {        
    // const docRef = doc(DB, "imagenesCarrousel",`${productId}Carrousel`) Antes usaba la palabra carrousel pero al llamarse asi la coleccion con el id es suficiente
    const docRef = doc(DB, "imagenesCarrousel", productId)
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data()
    if (docData) {
      setImg2(docData.img2)
      setImg3(docData.img3) 
    } else {
      console.log("No existe el documento en firebase")
    }
         
}
  
  useEffect(
    ()=> {
      getSingleProduct(id).then((respuestaDatos)=>{
        setProduct(respuestaDatos) //NO SE ROMPE TODO XQ TENGO EL SET TIMEOUT SINO TE HARÍA UN BUCLE INFINITO Y TE RENDERIZARIA TODO INFINITAS VECES XQ SIEMPRE ESTARIA CMABIANDO DE ESTADO
        setIsLoading(false)    
      })
      getImagenesCarrousel(id)     
    },[id]
  )


  if (isLoading)
  return (<Loader/>);  

  return (    
      <div className='itemDetailContainerDiv'>
        {
          img2 === "" || img3 === undefined ? <SinSlider img={product.img}/> : <SimpleSlider img={product.img} img2={img2} img3={img3}/> //Aca me aseguro que si no estan cargadas las 2 imagenes del carrousel voy a mostrar el SinSlider para evitar me quede la ultima imagen en blanco del SimpleSlider
        }
        
        <ItemDetail id={product.id} title={product.title} img={product.img} description={product.description} price={product.price.toLocaleString().replace(",", ".")} stock={product.stock}/>
    
      </div>    
  )
}

export default ItemDetailContainer;

                                                                     /* Tecnica de rendering condicional 1) */
      /* {
        product ? <ItemDetail id={product.id} title={product.title} img={product.img} description={product.description} price={product.price} stock={product.stock}/> : loader
      } */

   