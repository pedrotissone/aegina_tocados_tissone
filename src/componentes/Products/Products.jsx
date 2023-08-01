import React from 'react'
import "./products.css"
import {useState, useEffect} from "react"
import ProductCard from './ProductCard.jsx'
import {getItems, getItemsByCategory} from '../../services/firestore'
import { useParams } from "react-router-dom"
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'


function Products() {

  // const { user } = useContext(cartContext)
 
  const [products, setProducts] = useState([])
  
  const {idCategory} = useParams()   
  
  async function getItemsAsync(){
    if (!idCategory){
      let respuesta = await getItems();
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
 
  return (
    <>
    
    <section className='divProducts'>      
        
      
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
      

    </section>
    </>     
  )
}

export default Products;