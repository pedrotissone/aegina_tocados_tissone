import './App.css';
// Importando componentes
import NavBarContainer from './componentes/NavBar/NavBarContainer';
import Header from './componentes/Header/Header';
import Products from './componentes/Products/Products';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Importamos de la libreria los tres componentes necesarios
import { CartContextProvider } from './context/cartContext';
import CartView from './componentes/CartView/CartView';


function App() {
 

  return (

    <CartContextProvider>

      <BrowserRouter>

        <div className="App">

          <header>

            <Header/>

          </header>

          <main className='main'>

            <NavBarContainer greeting="Bienvenidos, seleccione un tipo de tocado" />

          </main>


          <Routes>


            {/* /detail/:id significa que CUALQUIER COSA! que yo escriba despues de /detail me va a mostrar el componente definido, en el caso el ItemDetailContainer. NOTA: esa ruta dinamica (/:x) React la va a guardar en su memoria */}
            <Route path="/detail/:id" element={<ItemDetailContainer />} />

            <Route path="/category/:idCategory" element={
              <section className='productSection'>

                <Products />

              </section>
            }
            />

            {/* Yo al marcar /, defino que cuando este en el home voy a mostrar Products, pero cuando me voy a otra ruta desaparece a diferencia que si estuviera dentro del RouteBrowser que apareceria siempre */}
            <Route path="/" element=

              {<section className='productSection'>

                <Products />

              </section>}
            />

            {/* Esta ruta * es para probar errores, ya que si no selecciono ninguna de las rutas definidas va a mostrar por defecto esa siempre. Igual la tengo comentada y solo la uso si necesito corroborar que las rutas funcionan o no */}
            {/* <Route path="*" element={ <h1>ERROR 404: La ruta definida no existe</h1> } />  */}

            <Route path='/cart' element={<CartView/>}/>




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
    </CartContextProvider>

  );
}

export default App;


