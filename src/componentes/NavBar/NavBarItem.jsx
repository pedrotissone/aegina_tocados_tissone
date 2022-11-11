import "./navBarItem.css"
import {Link} from "react-router-dom"; //Importo componente Link

function NavBarItem(props) { // Este componente va a representar las cards de los diferentes tipos de tocado (flores, piedra y porcelana)
  return (
    <div className="navBarDiv">
        <img className="navBarImg" src={props.img} alt={props.title}/>
        <Link to="/products" className="itemTitle">{props.title}</Link> 
        
    </div>
  )
}

export default NavBarItem

//LAS PROPS DEL COMPONENTE SE ESCRIBEN ACA, CON EL NOMBRE CON EL QUE LAS VAS A TENER QUE LLAMAR (En este caso: img, title).