
import "./header.css"
import CartWidget from "./CartWidget"




function Header(props) {
  return (
    
    <div className="header">

        <div className="headerTitle">
        <h1>A E G I N A </h1>
        <h2>Head Pieces</h2>
        </div>

        <CartWidget counter={props.counter}/>
               
    </div>
    
    
        
    
  )
}

export default Header