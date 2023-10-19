import axios from "axios";

// Récupere tous les pokémons depuis l'API PokeAPI
function getPokemons(pokemonAffiche, pokemonPerPage){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?offset="+pokemonAffiche+"&limit="+pokemonPerPage)
    // return axios.get("https://pokeapi.co/api/v2/pokemon")
}
function getPokemonById(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
}

function getPokemonByIdBis(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+id)
}
// Exporte toutes les fonctions crée au dessus afin de les utiliser dans nos pages/componenents
export default {
    getPokemons,
    getPokemonById,
    getPokemonByIdBis
}