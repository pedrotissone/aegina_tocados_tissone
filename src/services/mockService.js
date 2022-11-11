//                                  -----------------------BACK-END---------------------------
//Vamos a trbajar sin errores por eso quito el if y el reject de los parametros de la promesa

import products from "../data/data";

function getItems(){
    
    return new Promise((resolve) => {
        setTimeout(()=>{            
        resolve(products); //esta promise me trae mis productos de data.js cuando resuelve           
        }, 2000);
    })        
}
//Exporto funcion (named export != default)
export function getSingleProduct(){ //Aca hago lo mismo pero devuelvo solo 1 producto
    
    return new Promise((resolve) => {
        setTimeout(()=>{            
        resolve(products[2]); //esta promise me trae mis productos de data.js cuando resuelve           
        }, 2000);
    })        
}

    export default getItems;