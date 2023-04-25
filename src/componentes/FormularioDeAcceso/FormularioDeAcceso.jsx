import React from "react";
import { useState } from "react";
import "./FormularioDeAcceso.css"

function FormularioDeAcceso() {	

	const [userName, setUserName] = useState("")

	const [password, setPassword] = useState("")

	function handleUserNameChange(event) {
		setUserName(event.target.value)
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		console.log("hay que probar md5")
	}
	

	return(
		<div className="FormDiv" onSubmit={handleSubmit}>
		
		<form className="FormularioDeAcceso">
			<input className="FormUser" type="text" placeholder="Nombre de usuario" onChange={handleUserNameChange}/>
			<input className="FormPassword" type="password" placeholder="Contraseña" onChange={handlePasswordChange}/>
			<button type="submit">Confirmar</button>
		</form>
		</div>
	)
}

export default FormularioDeAcceso;