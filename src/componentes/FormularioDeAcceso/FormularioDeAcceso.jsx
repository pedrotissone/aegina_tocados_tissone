import React from "react";
import { useNavigate } from "react-router-dom"
import { cartContext } from "../../context/cartContext" 
import { useState, useContext} from "react";
import "./FormularioDeAcceso.css"
import md5 from "md5"; // importo funcion para hashear user y password, no lo use al final
import { app } from "../../services/firestore";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"



function FormularioDeAcceso() {

	const navigate = useNavigate()	

	const auth = getAuth(app)
	
	const {setUser} = useContext(cartContext)

	const [userName, setUserName] = useState("")

	const [password, setPassword] = useState("")

	function handleUserNameChange(event) {
		setUserName(event.target.value)
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value)
	}

	async function handleSubmit(event) {
		try {
			event.preventDefault()
			await signInWithEmailAndPassword(auth, userName, password)
			console.log("Te logeaste con exito "+ auth.currentUser.email)
			setUser(true)
			navigate("/")
		} catch (error) {
			console.error("usuario o contraseña no valida")
		}							
	}			

	return(
		
		<div className="formDiv" onSubmit={handleSubmit}>
			
				<form className="formularioDeAcceso">
			<input className="formUser" type="text" placeholder="Nombre de usuario" onChange={handleUserNameChange}/>
			<input className="formPassword" type="password" placeholder="Contraseña" onChange={handlePasswordChange}/>
			<button className="formButton" type="submit">Confirmar</button>
		</form>	
		

		</div>
	)
}

export default FormularioDeAcceso;