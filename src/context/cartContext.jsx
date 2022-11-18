import { createContext, useState } from "react";

 export const cartContext = createContext() //Importamos e inicializamos el context con createContext

 export function CartContextProvider(props){ //Esto SI es un componente (un Provider)
    const saludoContext = "Hola context"
    const itemsInCart = 3

    const [cart, setCart] = useState([]);

    function addToCart(product, count){
        console.log(product, count)             
        
        let newCart = [ ...cart];        
        newCart.push( ...product, count)
        setCart(newCart)
    }

    const value = {
        saludoContext,
        itemsInCart,
        addToCart,
        cart
    }
    //La prop value es fundamental, a esa prop yo le doy un OBJETO con todas las variables que quiero que sean accecibles para mi App
    return(
        <cartContext.Provider value={value}> 
            {props.children}
        </cartContext.Provider> 
    )
    

}