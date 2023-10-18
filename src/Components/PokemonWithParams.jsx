import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import '../Styles/pokemonCard.css';
import pokemonService from "../Services/pokemonService";
import Loading from "./Loading";
import ListGroup from 'react-bootstrap/ListGroup';

const PokemonWithParams = ({pokemon}) => {

    return <><Card className={"col-3"}>
        <Link to={"/pokemon/details/"+pokemon.url.substring(41).replaceAll("/", "")} >
            {/* Si vous utiliser l'appel d'API pokemon-species */}
            <Card.Img variant="top"
                      src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.url.substring(41).replaceAll("/", "") + ".png"}/>
            {/* Si vous utiliser l'appel d'API pokemon */}
            {/*<Card.Img variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ pokemon.url.substring(34).replaceAll("/", "") + ".png"} />*/}
            <Card.Body>
                {/* pokemon.name.charAt(0).toUpperCase() -> Récupere le premiers caractères et le met en majuscule */}
                {/* pokemon.name.substring(1) -> Récupere le reste de ma chaine de caractères a partir de 1  */}
                <Card.Title
                    className={"text-center"}>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.substring(1)} #{pokemon.url.substring(41).replaceAll("/", "")}</Card.Title>
            </Card.Body>
        </Link>
    </Card>
    </>;
};

export default PokemonWithParams;