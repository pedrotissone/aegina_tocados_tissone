
import "./header.css"

function Header(props) {
  return (
    
    <div className="header">

        <div className="headerTitle">
        <h1>A E G I N A </h1>
        <h2>Head Pieces</h2>
        </div>

        <div className="headerCarrito">
        <img src="./img/carritoCompras.svg" alt="carrito de compras"/>
        <span>{props.counter}</span>
        </div>
        
    </div>
    
    
        
    
  )
}

export default Header