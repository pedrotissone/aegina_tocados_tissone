import NavBarItem from "./NavBarItem"
import "./navBarContainer.css"


function NavBarContainer(props) {
  return (
    <>        
        <h3 className="navBarTitle">{props.greeting}</h3>
      <div className="navBar">
        <NavBarItem title="Flores Preservadas" img="/img/img1.png"/>
        <NavBarItem title="Piedras" img="/img/img2.png"/>
        <NavBarItem title="Porcelana Fría" img="/img/img3.png"/>
      </div>

    </>
  )
}

export default NavBarContainer