import './App.css';
// Importando componentes
import NavBarContainer from './componentes/NavBar/NavBarContainer';
// import MyButton from './componentes/MyButton/MyButton.jsx';
import Header from './componentes/Header/Header';
import ClickCounter from './componentes/ClickCounter/ClickCounter';
import Products from './componentes/Products/Products';
import CartWidget from './componentes/Header/CartWidget';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Importamos de la libreria los tres componentes necesarios
import ProductCard from './componentes/Products/ProductCard';





function App() {

  const randomCounter = Math.round(Math.random()* 10)  

  return (

    <BrowserRouter>
    
    <div className="App">

     <header>

        <Header counter={randomCounter}/>

      </header>

      <main className='main'>

        <NavBarContainer greeting="Bienvenidos, seleccione un tipo de tocado"/>

      </main>

   
    <Routes>

      <Route path="/products" element={

      <section className='productSection'>

      <Products/>

      </section> } />

      <Route path="/products/" element={ <ItemDetailContainer/> } />
      {/* Esta ruta * es para probar errores, ya que si no selecciono ninguna de las rutas definidas va a mostrar por defecto esa siempre. Igual la tengo comentada y solo la uso si necesito corroborar que las rutas funcionan o no */}
      {/* <Route path="*" element={ <h1>ERROR 404: La ruta definida no existe</h1> } />  */}
   
      


    </Routes>

    

     

     
      

      {/* <section>
        <ItemDetailContainer/>
        
      </section>

      <section>
        <ClickCounter/>
        <CartWidget counter={randomCounter}/>
      </section>

       
       
      <section className='productSection'>

      <Products/>

      </section> */}
        
       
     
    </div>
     {/* <MyButton text="boton maestro" color="blue"/>
        <MyButton text="Boton 1" color="orange" otrotext="kaka" />
        <MyButton text="boton2" otra="hola loco"/> */}
        {/* <MyButton text="hola loco" color= "blue">
          <p>Hola soy children creo</p>          
        </MyButton>

        <MyButton text="hola" color= "green">
          <p>Hola soy children creo</p>      
        </MyButton> */}
    </BrowserRouter>
    
  );
}

export default App;


