import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import '../Styles/pokemonCard.css';
import pokemonService from "../Services/pokemonService";
import Loading from "./Loading";
import ListGroup from 'react-bootstrap/ListGroup';

const Pokemon = ({pokemon}) => {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonById = async () => {
        try {
            const response = await pokemonService.getPokemonById(pokemon.url.substring(41).replaceAll("/", ""))
            setCurrentPokemon(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemonById()
    }, []);

    return <>{loading == false ? <Card className={"col-3"}>
        <Link to={"/pokemon/details"} state={currentPokemon}>
            {/* Si vous utiliser l'appel d'API pokemon-species */}
            <Card.Img variant="top"
                      src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.url.substring(41).replaceAll("/", "") + ".png"}/>
            {/* Si vous utiliser l'appel d'API pokemon */}
            {/*<Card.Img variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ pokemon.url.substring(34).replaceAll("/", "") + ".png"} />*/}
            <Card.Body>
                {/* pokemon.name.charAt(0).toUpperCase() -> Récupere le premiers caractères et le met en majuscule */}
                {/* pokemon.name.substring(1) -> Récupere le reste de ma chaine de caractères a partir de 1  */}
                {/*<Card.Title*/}
                {/*    className={"text-center"}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}</Card.Title>*/}
                <Card.Title
                    className={"text-center"}>{currentPokemon.names != undefined && currentPokemon.names[4].name.charAt(0).toUpperCase() + currentPokemon.names[4].name.substring(1)} #{currentPokemon.id} <br />
                    {currentPokemon.name != undefined && currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.substring(1)} #{currentPokemon.id}
                </Card.Title>
                <ListGroup variant="flush">
                    {currentPokemon.egg_groups.map(type => {
                       return <ListGroup.Item key={type.name}>{type.name}</ListGroup.Item>
                    })}
                </ListGroup>
            </Card.Body>
        </Link>
    </Card> :
        <Loading />
    }
    </>;
};

export default Pokemon;