import NavBarItem from "./NavBarItem"
import "./navBarContainer.css"
import {Link} from "react-router-dom"


function NavBarContainer(props) {
  return (
    <>        
        <h3 className="navBarTitle">{props.greeting}</h3>
      <div className="navBar">

        <Link to="/category/Flores preservadas"><NavBarItem title="Flores preservadas" img="/img/img1.png"/></Link>

        <Link to="/category/Piedras"><NavBarItem title="Piedras" img="/img/piedra1.png"/></Link>

        <Link to="/category/Porcelana fria"><NavBarItem title="Porcelana Fría" img="/img/porcelana3.png"/></Link>

      </div>

    </>
  )
}

export default NavBarContainer