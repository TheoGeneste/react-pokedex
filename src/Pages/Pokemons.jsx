import React, {useEffect, useState} from 'react';
import pokemonService from "../Services/pokemonService";
import Pokemon from "../Components/Pokemon";

const Pokemons = () => {
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
                return <Pokemon key={poke.name} pokemon={poke}/>
            })}
        </div>
    </>;
};

export default Pokemons;