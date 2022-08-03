import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContext from './components/Cart/CartContext';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route index element={<ItemListContainer/>} />
          <Route path='/productos' element={<ItemListContainer id={[]}/>} />
          <Route path='/category/:name' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='item/:id/cart' element={<p>Cart Page</p>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
