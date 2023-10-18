import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import pokemonService from "../Services/pokemonService";
import Loading from "../Components/Loading";

const PokemonDetailsWithParams = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonById = async () => {
        try {
            const response = await pokemonService.getPokemonById(id)
            setPokemon(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemonById()
    }, []);
    return <>
        {loading == false ? <>
            {pokemon.names[4].name}
        </> : <Loading/>}
    </>;
};

export default PokemonDetailsWithParams;