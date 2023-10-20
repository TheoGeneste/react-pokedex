import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import generationService from "../Services/generationService";
import Pokemon from "../Components/Pokemon";
import PaginationPerso from "../Components/PaginationPerso";
import PokemonWithParams from "../Components/PokemonWithParams";

const Generations = () => {
    const {generation} = useParams();
    const [pokemons, setPokemons] = useState([]);

    const fetchGenerationByName = async () => {
        try {
            const response = await generationService.getGenerationByName(generation);
            response.data.pokemon_species.sort((firstItem, secondItem) =>
                //Croissant
                firstItem.url.substring(41).replaceAll("/", "") -
                secondItem.url.substring(41).replaceAll("/", "")
                //Decroissant
                // secondItem.url.substring(41).replaceAll("/", "") -
                // firstItem.url.substring(41).replaceAll("/", "")
            )
            // response.data.pokemon_species.sort((pokeA, pokeB) => {
            //     const nameA = pokeA.name.toUpperCase(); // ignore upper and lowercase
            //     const nameB = pokeB.name.toUpperCase(); // ignore upper and lowercase
            //     //Decroissant
            //     return nameA < nameB;
            //     //Croissant
            //     // return nameA > nameB;
            // })
            setPokemons(response.data.pokemon_species)
        } catch (e) {
            console.log(e)
        }
    }

    const uppercase = (string) => {
        let strCopy = string.split('-')
        let startString = strCopy[0];
        let endString = strCopy[1].toUpperCase()
        return startString.substring(0,1).toUpperCase()+startString.substring(1) + " " + endString
    }

    useEffect(() => {
        fetchGenerationByName()
    }, []);

    return <>
        <h1 className={"text-center"}>Liste des Pokémons pour {uppercase(generation)}</h1>
        <div className={"d-flex flex-wrap gap-2 justify-content-center"}>
            {pokemons.map(poke => {
                // return <Pokemon key={poke.name} pokemon={poke}/>
                return <PokemonWithParams key={poke.name} pokemon={poke}/>
            })}
        </div>
    </>;
};

export default Generations;