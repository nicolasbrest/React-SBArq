import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
/*import ItemCount from './components/ItemCount';*/
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
          <Route path='/cart' element={<div>Cart Page</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
