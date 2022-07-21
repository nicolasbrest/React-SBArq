import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
/*import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';*/


function App() {
  return (
    <>
    <NavBar/>
    <br/>
    {/*<ItemListContainer titulo={"Tienda SB Arq"}/>*/}
    <ItemDetailContainer id={0}/>
    <ItemDetailContainer id={1}/>
    <ItemDetailContainer id={2}/>
    <ItemDetailContainer id={3}/>
    <ItemDetailContainer id={4}/>
    <ItemDetailContainer id={5}/>
    </>
  );
}

export default App;
