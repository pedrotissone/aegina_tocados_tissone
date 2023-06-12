
import "./header.css"
import CartWidget from "./CartWidget"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react";
import { app } from "../../services/firestore";
import {getAuth, signOut} from "firebase/auth"
import { getStorage, ref } from "firebase/storage"
import { cartContext } from "../../context/cartContext";


function Header(props) {
  
  //          S T O R A G E

const storage = getStorage() // get the storage instance

const storageRef = ref(storage) // storage reference root

const storagePruebaRef = ref(storage, "fotos/fotoPrueba.jpg")


//          S T O R A G E


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
<<<<<<< HEAD
			console.error("Se produjo un error " + error)			
=======
			console.error("Se produjo un error  " + error)			
>>>>>>> nueva-rama
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

      