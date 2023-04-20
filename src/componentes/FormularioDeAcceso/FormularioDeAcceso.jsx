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
		if (userName == process.env.REACT_APP_USERNAME && password == process.env.REACT_APP_PASSWORD) {
			console.log("Bien te logeaste jopi")
		} else {
			console.log("no funko")
		}
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