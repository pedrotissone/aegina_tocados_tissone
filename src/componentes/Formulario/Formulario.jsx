import React from "react";

function Formulario() {

	const usuario = "lala2"
	const contraseña = "lolo2"

	return(
		<form>
			<input type="text" placeholder="Nombre de usuario"/>
			<input type="text" placeholder="Contraseña"/>
		</form>
	)
}

export default Formulario;