import "./mybutton.css"

function MyButton(props) {
    // const colorBoton = {color: props.color} Le voy a dar estilo en linea en ves de usar una constante
    return <button style={{color: props.color}}  className="boton">{props.text} {props.otrotext} {props.otra}</button>
}

export default MyButton;