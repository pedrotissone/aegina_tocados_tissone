import './App.css';
// Importando componentes
import NavBarContainer from './componentes/NavBar/NavBarContainer';
import MyButton from './componentes/MyButton/MyButton.jsx';
import Header from './componentes/Header/Header';

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

       
        <MyButton text="boton maestro" color="blue"/>
        <MyButton text="Boton 1" color="orange" otrotext="kaka" />
        <MyButton text="boton2" otra="hola loco" />
        
     
    </div>
  );
}

export default App;
