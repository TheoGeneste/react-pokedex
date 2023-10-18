import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokemons from "./Pages/Pokemons";
import PokemonDetailsWithParams from "./Pages/PokemonDetailsWithParams";
import PokemonDetails from "./Pages/PokemonDetails";
import PokemonsWithParams from "./Pages/PokemonsWithParams";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Pokemons />}/>
        <Route path={"/pokemons"} element={<PokemonsWithParams />}/>
        <Route path={"/pokemon/details/:id"} element={<PokemonDetailsWithParams />}/>
        <Route path={"/pokemon/details"} element={<PokemonDetails />}/>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
