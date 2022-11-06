import './App.css';
// Importando componentes
import NavBarContainer from './componentes/NavBar/NavBarContainer';
// import MyButton from './componentes/MyButton/MyButton.jsx';
import Header from './componentes/Header/Header';
import ClickCounter from './componentes/ClickCounter/ClickCounter';
import Products from './componentes/Products/Products';




function App() {
  const randomCounter = Math.round(Math.random()* 10)  

  return (
    <div className="App">

      <header>

        <Header counter={randomCounter}/>

      </header>

      <main className='main'>

        <NavBarContainer greeting="Bienvenidos, seleccione un tipo de tocado"/>

      </main>
      <section>
        <ClickCounter/>
      </section>

       
        {/* <MyButton text="boton maestro" color="blue"/>
        <MyButton text="Boton 1" color="orange" otrotext="kaka" />
        <MyButton text="boton2" otra="hola loco"/> */}
        {/* <MyButton text="hola loco" color= "blue">
          <p>Hola soy children creo</p>          
        </MyButton>

        <MyButton text="hola" color= "green">
          <p>Hola soy children creo</p>      
        </MyButton> */}
      <section className='productSection'>
      <Products/>

      </section>
        
       
     
    </div>
  );
}

export default App;
