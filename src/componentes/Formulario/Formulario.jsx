import React from "react";

function Formulario() {

	const usuario = "lala3"
	const contraseña = "lolo3"

	return(
		<form>
			<input type="text" placeholder="Nombre de usuario"/>
			<input type="text" placeholder="Contraseña"/>
		</form>
	)
}

export default Formulario;