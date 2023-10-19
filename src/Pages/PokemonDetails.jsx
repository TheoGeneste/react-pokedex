import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import PokemonGraph from "../Components/PokemonGraph";
import PokemonInfos from "../Components/PokemonInfos";
import PokemonTypes from "../Components/PokemonTypes";
import PokemonWeekness from "../Components/PokemonWeekness";
import Loading from "../Components/Loading";
import Container from "react-bootstrap/Container";
import pokemonService from "../Services/pokemonService";

const PokemonDetails = () => {
    const location = useLocation()
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonById = async () => {
        try {
            const res = await pokemonService.getPokemonByIdBis(location.state.id)
            setPokemon({...location.state, pokemon : res.data})
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPokemonById()
    }, []);

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

export default PokemonDetails;