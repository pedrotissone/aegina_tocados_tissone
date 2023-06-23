import NavBarItem from "./NavBarItem"
import "./navBarContainer.css"
import {Link} from "react-router-dom"
import {cartContext} from "../../context/cartContext"
import { useContext } from "react"



function NavBarContainer(props) {

  const { user } = useContext(cartContext)

  return (
    <>    
       <div className="navBar">

        <Link to="/category/Flores preservadas"><NavBarItem title="FLORES PRESERVADAS" img="/img/img1.png"/></Link>

        <Link to="/category/Piedras"><NavBarItem title="PIEDRAS" img="/img/piedra1.png"/></Link>

        <Link to="/category/Porcelana fria"><NavBarItem title="PORCELANA FRÍA" img="/img/porcelana3.png"/></Link>        

      </div>
      
      {user && <div className='divCrearNuevoProducto'>
      <Link to={"/CrearNuevoProducto"}><h2 className="crearNuevoProducto">Crear nuevo producto</h2></Link>
      <Link to={"/ModificarPrecio"}><h2 className="modificarPrecioDeProductos">Modificar precio de productos</h2></Link>
      </div>}      
    </>
  )
}

export default NavBarContainer