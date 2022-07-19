import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
    <NavBar/>
    <br/>
    <ItemListContainer titulo={"Tienda SB Arquitectas"}/>
    <hr/>
    <ItemCount itemproducto={"Ladrillo"} stock={10} initial={1}/>
    <hr/>
    <ItemCount itemproducto={"Arena"} stock={8} initial={1}/>
    <hr/>
    <ItemCount itemproducto={"Cemento"} stock={6} initial={1}/>
    <hr/>
    <ItemCount itemproducto={"Almohada"} stock={4} initial={1}/>
    <hr/>
    <ItemCount itemproducto={"Frasco"} stock={2} initial={1}/>
    </>
  );
}

export default App;
