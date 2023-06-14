import React from "react";
import { useState } from "react";
import { app, DB } from "../../services/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getFirestore, collection, getDocs, doc, addDoc, setDoc } from "firebase/firestore"
import "./crearNuevoProducto.css"

function CrearNuevoProducto() { //Primero vamos a probar solo con la imagen y después agrego lo demrás

    const storage = getStorage(app) // get the storage instance

    //                                              E S T A D O S
    
    const [title, setTitle] = useState("")
    
    const [description, setDescription] = useState("")

    const [category, setCategory] = useState("")

    const [price, setPrice] = useState("")
    
    const [imagenURL, setImagenURL] = useState("")
    

    //                                              E S T A D O S

    
    //                                            F U N C I O N E S

    const titleHandler = (e) => {               
            setTitle(e.target.value)           
        }
    
    const handleDescription = (e) => {
        setDescription(e.target.value)        
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }    
 
    const fileHandler =  async (e) => {           
        const archivo = e.target.files[0]; //Referencia al archivo (le pongo el 0 porque solo voy a cargar uno sino me devuelve un array de files)
        const nombreArchivo = title + Math.floor(Math.random() * 1000) //Agrego el random porque Storage me pisa una imagen anterior con la nueva si tiene el mismo nombre     
        const archivoPath = ref(storage, nombreArchivo) // El path donde se guarda el archivo en el storage
        await uploadBytes(archivoPath, archivo) // metodo para subir el archivo (Antes solo subia el archivoPath y no me aparecia la imagen por eso le agrege otro argumento que es el archivo)
        const archivoURL = await getDownloadURL(archivoPath) // obtengo el URL de la imagen para descargarla
        setImagenURL(archivoURL)
        console.log("Se subio la imagen al Storage") 
    }   

    const submitHandler = async (e) => {
        e.preventDefault()        
        if (title === "" || imagenURL === "" || description === "" || category === "" || price === "") {
           alert("Revise que esten completos todos los campos del formulario")            
        } else {        
            console.log("hola funciona el submit handler")
            const docRef = await addDoc(collection(DB, "products"), { //AddDoc te genera un id automatico con setDoc nesecitas ponerle uno vos o te sale error del even number
                title: title,
                img: imagenURL,
                description: description,
                category: category,
                price: price               
            })
            alert("Producto creado con éxito")
            window.location="/"
        }
        
    }   

    return(
        <div className="crearNuevoProductoDiv">    
        
        <form className="crearNuevoProductoForm" onSubmit={submitHandler}>                  
            

            <label htmlFor="name">Nombre del producto</label>
            <input type="text" id="name" onChange={titleHandler}/>

            <label htmlFor="description">Descripción del producto</label>
            <input type="text" id="description" onChange={handleDescription}/>

            <label>Seleccione la categoria del producto</label>           
           
            <label htmlFor="Flores preservadas">Flores preservadas</label>
            <input type="radio" id="Flores preservadas" name="category" value="Flores preservadas" checked={category == "Flores preservadas"} onChange={handleCategory}></input>           
            
            <label htmlFor="Piedras">Piedras</label>
            <input type="radio" id="Piedras" name="category" value="Piedras" checked={category == "Piedras"} onChange={handleCategory}></input>          
            
            <label htmlFor="Porcelana fria">Porcelana fria</label>
            <input type="radio" id="Porcelana fria" name="category" value="Porcelana fria" checked={category == "Porcelana fria"} onChange={handleCategory}></input>    
           
           
            <label htmlFor="price">Precio del producto</label>
            <input type="number" id="price" onChange={handlePrice}></input>

            <label htmlFor="selectImg">Seleccione la imagen del producto</label>            
            <input type="file" id="selectImg" disabled={!title} onChange={fileHandler}/>       


            <button className="crearNuevoProductoButton">Confirmar</button>
            
        </form>

        </div>
    )
}

export default CrearNuevoProducto