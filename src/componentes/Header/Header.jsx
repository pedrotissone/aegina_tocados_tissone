
import "./header.css"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"




function Header(props) {
  return (
    
    <div className="header">

        
        <div className="headerTitle">
        <Link to="/">
        <h1>A E G I N A </h1>
        <h2>Head Pieces</h2>
        </Link>
        </div>
        

        <CartWidget counter={props.counter}/>
               
    </div>
    
    
        
    
  )
}

export default Header