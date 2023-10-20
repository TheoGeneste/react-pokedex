import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import versionService from "../Services/versionService";
import generationService from "../Services/generationService";
import Pokemon from "../Components/Pokemon";
import PokemonWithParams from "../Components/PokemonWithParams";

const Versions = () => {
    const {version} = useParams()
    const [pokemons, setPokemons] = useState([]);

    const fetchVersionById = async () => {
        try {
            const response = await versionService.getVersionByID(version);
            const versionGroupe = await fetchVersionGroupById(response.data.version_group.name)
            await fetchPokemonByGeneration(versionGroupe);
        } catch (e) {
            console.log(e)
        }
    }

    const fetchVersionGroupById = async (groupeVersion) => {
        try {
            const response = await versionService.getVersionGroupByID(groupeVersion)
            return response.data.generation.name
        } catch (e) {
            console.log(e)
        }
    }

    const fetchPokemonByGeneration = async (generation) => {
        try {
            const response = await generationService.getGenerationByName(generation)
            setPokemons(response.data.pokemon_species)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchVersionById()
    }, []);

    // C'est ICI que vous devez faire faire vos 3 appels
    // console.log(version)
    return <>
        <div className={"d-flex flex-wrap gap-2 justify-content-center"}>
            {pokemons.map(poke => {
                // return <Pokemon key={poke.name} pokemon={poke}/>
                return <PokemonWithParams key={poke.name} pokemon={poke}/>
            })}
        </div>
    </>;
};

export default Versions;