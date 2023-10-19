import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import pokemonService from "../Services/pokemonService";
import Loading from "../Components/Loading";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import PokemonTypes from "../Components/PokemonTypes";
import PokemonInfos from "../Components/PokemonInfos";
import PokemonWeekness from "../Components/PokemonWeekness";
import PokemonGraph from "../Components/PokemonGraph";

const PokemonDetailsWithParams = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonById = async () => {
        try {
            const response = await pokemonService.getPokemonById(id)
            const res = await pokemonService.getPokemonByIdBis(id)
            setPokemon({...response.data, pokemon : res.data})
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemonById()
    }, []);

    // console.log(pokemon)
    return <Container className={"d-flex flex-column"}>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Précédent</Button>
            <Button variant="secondary">Suivant</Button>
        </ButtonGroup>
        {loading == false ? <>
            <div>
                <h1 className={"text-center"}>{pokemon.names[4].name} N°{pokemon.id}</h1>
            </div>
            <div className={"d-flex gap-3"}>
                <div>
                    <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemon.id+".png"} thumbnail />
                    <PokemonGraph stats={pokemon.pokemon.stats}/>
                </div>
                <div>
                    <p>{pokemon.flavor_text_entries[16].flavor_text}</p>
                    <div>
                        <h4>Versions</h4>
                    </div>
                    <PokemonInfos habitat={pokemon.habitat.name} weight={pokemon.pokemon.weight} height={pokemon.pokemon.height} genus={pokemon.genera[3].genus}/>
                    <PokemonTypes types={pokemon.pokemon.types}/>
                    {pokemon.pokemon.types.map(type => {
                        console.log(type)
                        return <PokemonWeekness type={type} />
                    })}
                </div>
            </div>

        </> : <Loading/>}
    </Container>;
};

export default PokemonDetailsWithParams;