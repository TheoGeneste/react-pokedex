import React, {useEffect, useState} from 'react';
import pokemonService from "../Services/pokemonService";
import Pokemon from "../Components/Pokemon";
import PaginationPerso from "../Components/PaginationPerso";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(21);
    const [totalPokemon, setTotalPokemon] = useState(0);
    const [maxPage, setMaxPage] = useState(20);
    const fetchPokemons = async () => {
        try {
            // pokemonPerPage * (currentPage - 1) ->  multiplie pokemone par page avec la pageCourante - 1 qui signifie que sur la page 1
            // on ferais 21 * (1 - 1)
            // sur la page 2 -> 21 * (2 - 1)
            let nombrePokemonAffiche = pokemonPerPage * (currentPage - 1)
            const response = await pokemonService.getPokemons(nombrePokemonAffiche, pokemonPerPage);
            setTotalPokemon(response.data.count)
            setMaxPage(Math.ceil((response.data.count / pokemonPerPage)))
            setPokemons(response.data.results)
        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     fetchPokemons();
    // }, []);

    useEffect(() => {
        fetchPokemons()
    }, [currentPage]);


    return <>
        <h1 className={"text-center"}>Liste des Pokémons</h1>
        <div className={"d-flex flex-wrap gap-2 justify-content-center"}>
            {pokemons.map(poke => {
                return <Pokemon key={poke.name} pokemon={poke}/>
            })}
        </div>
        <div className={"d-flex justify-content-center"}>
            <PaginationPerso currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
        </div>
    </>;
};

export default Pokemons;