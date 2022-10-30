import "./navBarItem.css"

function NavBarItem(props) { // Este componente va a representar las cards de los diferentes tipos de tocado (flores, piedra y porcelana)
  return (
    <div className="navBarDiv">
        <img className="navBarImg" src={props.img} alt={props.title}/>
        <a href="/" className="itemTitle">{props.title}</a>
        
    </div>
  )
}

export default NavBarItem