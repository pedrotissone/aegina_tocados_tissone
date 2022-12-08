import React from 'react'
import {useParams} from "react-router-dom"

function Thankyou() {
    const idOrder = useParams().idOrder
  return (
    <div>
        <h1><center>Gracias por su compra</center></h1>
        <h3><center>El id de su compra es: {idOrder}</center></h3>

    </div>
  )
}

export default Thankyou