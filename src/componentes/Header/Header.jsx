
import "./header.css"
import CartWidget from "./CartWidget"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { app } from "../../services/firestore";
import {getAuth, signOut} from "firebase/auth"
import { cartContext } from "../../context/cartContext";


function Header(props) {  

  const navigate = useNavigate()

  const auth = getAuth(app)

  const { user, setUser, checkLogin } = useContext(cartContext)

  async function handleSignOut() {
		try {
			await signOut(auth)
			console.log("Cerraste session")
      setUser(null)      
      navigate("/")			
			
		} catch (error) {
			console.error("Se produjo un error " + error)			
		}
  }

  useEffect( () => {
   checkLogin()
  }, [])
  
  
    return (

      <div className="header">

   {
    user == null ?

    <Link to="/Formulario">
      <p className="headerAccess">Acceso</p>      
    </Link>
     :
     <div>
      <p className="headerAccess">Usuario: Jopi</p>
      <button type="button" onClick={handleSignOut} >Cerrar Sesión</button>
    </div> 
   }      

   <div className="headerTitle">
     <Link className="headerLink" to="/">
       <h1 className="title">A E G I N A </h1>
       <h2 className="subtitle">Head Pieces</h2>
     </Link>
   </div>
   <Link to="/cart"> <CartWidget counter={props.counter} /> </Link>

 </div>
    )
  }


export default Header 

      