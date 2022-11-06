import React from 'react'
import "./clickCounter.css"

let stock = 10

function ClickCounter(props) {
    let [count, setCount] = React.useState(1) //Le doy 1 como valor inicial al estado del componente

    function handleClickMas(){
        if (count < stock){
            setCount(count + 1)
        }        
    }

    function handleClickMenos(){
        if (count > 1){
            setCount(count -1)
        }        
    }

  return (    
    <div className='clickCounterDiv'>
    <button onClick={handleClickMenos} className='clickCounterMenos'>-</button>
    <div className='clickCounter'>{count}</div>
    <button onClick={handleClickMas} className='clickCounterMas'>+</button>
    </div>
  )
}

export default ClickCounter