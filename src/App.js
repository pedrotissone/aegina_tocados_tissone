import './App.css';
// Importando componentes
import NavBarContainer from './componentes/NavBar/NavBarContainer';
import Header from './componentes/Header/Header';
import Products from './componentes/Products/Products';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Importamos de la libreria los tres componentes necesarios
import { CartContextProvider } from './context/cartContext';
import FormularioDeAcceso from './componentes/FormularioDeAcceso/FormularioDeAcceso';
import CrearNuevoProducto from './componentes/Products/CrearNuevoProducto';


function App() {
 

  return (

    <CartContextProvider>
       
      

      <BrowserRouter>

        <div className="App">        
  
          <header>

            <Header />

          </header>    


          {/* <main className='main'>

            <NavBarContainer />

          </main> */}


          <Routes>

            <Route path='/' element={ 

              <main className='main'>
                <NavBarContainer />  
              </main>
             }/>           

            <Route path='/Formulario' element={ <FormularioDeAcceso /> }/>

            


            {/* /detail/:id significa que CUALQUIER COSA! que yo escriba despues de /detail me va a mostrar el componente definido, en el caso el ItemDetailContainer. NOTA: esa ruta dinamica (/:x) React la va a guardar en su memoria */}
            <Route path="/detail/:id" element={<ItemDetailContainer />} />

            <Route path="/category/:idCategory" element={
              <>
                <main className='main'>
                  <NavBarContainer />  
                </main>       
                <Products />              
              </>  
            }
            />

         
            {/* <Route path="/" element=
              {
                <Products />
              }
            /> */}

            <Route path='/CrearNuevoProducto' element=
            {
              <CrearNuevoProducto />
            }
            />

            {/* Esta ruta * es para probar errores, ya que si no selecciono ninguna de las rutas definidas va a mostrar por defecto esa siempre. Igual la tengo comentada y solo la uso si necesito corroborar que las rutas funcionan o no */}
            <Route path="*" element={<h1><center>ERROR 404: La ruta definida no existe</center></h1>} />

            {/* <Route path='/cart' element=
            {
            <>
                     
              <CartView/>
            
            </>
            }/> */}

            {/* <Route path="/thankyou/:idOrder" element={<Thankyou />} /> */}




          </Routes>

        </div>

      </BrowserRouter>

          
    </CartContextProvider>

  );
}

export default App;


