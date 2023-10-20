import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokemons from "./Pages/Pokemons";
import PokemonDetailsWithParams from "./Pages/PokemonDetailsWithParams";
import PokemonDetails from "./Pages/PokemonDetails";
import PokemonsWithParams from "./Pages/PokemonsWithParams";
import NavBar from "./Components/NavBar";
import Generations from "./Pages/Generations";
import Versions from "./Pages/Versions";

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Pokemons />}/>
        <Route path={"/pokemons"} element={<PokemonsWithParams />}/>
        <Route path={"/pokemon/details/:id"} element={<PokemonDetailsWithParams />}/>
        <Route path={"/pokemon/details"} element={<PokemonDetails />}/>
        <Route path={"/generation/:generation"} element={<Generations />} />
        <Route path={"/version/:version"} element={<Versions />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
