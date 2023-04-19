
import "./header.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"




function Header(props) {
  
  return (

    <div className="header">

     
      <Link to="/Formulario">
      <p className="headerAccess">Acceso</p>      
      </Link>
     

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