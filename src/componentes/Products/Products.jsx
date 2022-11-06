import React from 'react'
import products from '../../data/data.js'
import ProductCard from './ProductCard.jsx'
import "./products.css"


function Products() {
  return (
    
      <>
        {products.map((products)=>{
          return (
          
            <ProductCard
            key={products.id}
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