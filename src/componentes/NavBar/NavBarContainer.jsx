import NavBarItem from "./NavBarItem"
import "./navBarContainer.css"
import {Link} from "react-router-dom"


function NavBarContainer(props) {
  return (
    <>        
        
      <div className="navBar">

        <Link to="/category/Flores preservadas"><NavBarItem title="FLORES PRESERVADAS" img="/img/img1.png"/></Link>

        <Link to="/category/Piedras"><NavBarItem title="PIEDRAS" img="/img/piedra1.png"/></Link>

        <Link to="/category/Porcelana fria"><NavBarItem title="PORCELANA FRÍA" img="/img/porcelana3.png"/></Link>

      </div>

    </>
  )
}

export default NavBarContainer