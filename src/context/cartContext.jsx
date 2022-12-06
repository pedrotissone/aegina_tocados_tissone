//IMPORTANTE: CADA CAMBIO QUE SE REALIZE EN EL CONTEXT SE PROPAGA AUTOMATICAMENTE A TODOS LOS COMOPONENTES QUE CONSUMEN DICHO CONTEXTO, SIN NECESIDAD DE USAR USEEFFECT O NADA.

import { createContext, useState } from "react";

 export const cartContext = createContext() //Importamos e inicializamos el context con createContext

 export function CartContextProvider(props){ //Esto SI es un componente (un Provider)
    const saludoContext = "Hola context"
    

    const [cart, setCart] = useState([]);

    function addToCart(product, count){

        let itemAlreadyInCart = cart.findIndex(
            (itemInCart) => itemInCart.id === product.id
        );                   
        
        let newCart = [ ...cart];
        
        if (itemAlreadyInCart !== -1){
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart)
        } else {
            newCart.push({...product, count})       
            // setCart([...cart,{...product,count}])
            setCart(newCart)            
        }       
    }

    function itemsInCart(){ //Podria también usar el metodo reduce
        let total = 0
        cart.forEach((item) => (total = total + item.count))
        return total
    }

    function clear(){
        let clearCart = []
        setCart(clearCart)
    }

    function removeItem(idRemove){
        console.log("removiendo item")
        
    }
    
    function priceInCart(){
        let totalPrice = 0
        cart.forEach((producto) => totalPrice = totalPrice + (producto.price * producto.count ))
        return totalPrice
    }

    const value = {
        saludoContext,
        itemsInCart,
        addToCart,
        cart,
        clear,
        removeItem,
        priceInCart
    }
    //La prop value es fundamental, a esa prop yo le doy un OBJETO con todas las variables que quiero que sean accecibles para mi App
    return(
        <cartContext.Provider value={value}> 
            {props.children}
        </cartContext.Provider> 
    )   

}