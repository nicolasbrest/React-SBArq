import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContext from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <CartContext>
            <Routes>
              <Route index element={<ItemListContainer/>} />
              <Route path='/productos' element={<ItemListContainer id={[]}/>} />
              <Route path='/category/:name' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
      </CartContext>
      </BrowserRouter>
    </>
  )
}

export default App;
