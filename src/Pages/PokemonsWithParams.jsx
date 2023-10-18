import React, {useEffect, useState} from 'react';
import pokemonService from "../Services/pokemonService";
import PokemonWithParams from "../Components/PokemonWithParams";

const PokemonsWithParams = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        try {
            const response = await pokemonService.getPokemons();
            setPokemons(response.data.results)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, []);


    return <>
        <h1 className={"text-center"}>Liste des Pokémons</h1>
        <div className={"d-flex flex-wrap gap-2 justify-content-center"}>
            {pokemons.map(poke => {
                return <PokemonWithParams key={poke.name} pokemon={poke}/>
            })}
        </div>
    </>;
};

export default PokemonsWithParams;